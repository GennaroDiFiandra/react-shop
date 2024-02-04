import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Order, User } from "@/models/";
import { createOrderHandler, createUserHandler, useCartStore, validateEmail, validatePassword } from "@/services/";
import { Notification } from "@/components/";
import styles from "./Checkout.module.scss";

export function Checkout() {
  const navigate = useNavigate();

  const cartItems = useCartStore(state => state.cartItems);
  const cartProductsTotal = useCartStore(state =>state.cartProductsTotal);
  const emptyCart = useCartStore(state => state.emptyCart);

  const [customer, setCustomer] = useState<Partial<User>>({ role: "customer" });
  const [formErrors, setFormErrors] = useState(new Map());
  const [serverError, setServerError] = useState<string>("");

  function inputHandler(event:React.ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    switch (name) {
      case "email":
        if ((validateEmail(value))) {
          setCustomer(state => ({ ...state, [name]: value }));
          setFormErrors( current => {
            current.delete("email");
            return new Map(current);
          });
        }
        else {
          setFormErrors(new Map(formErrors.set("email", "The email format isn't correct")));
        }
        break;
      case "password":
        if (validatePassword(value)) {
          setCustomer(state => ({ ...state, [name]: value }));
          setCustomer(state => ({ ...state, "passwordConfirm": state.password }));
          setFormErrors( current => {
            current.delete("password");
            return new Map(current);
          });
        }
        else {
          setFormErrors(new Map(formErrors.set("password", "The password lenght must be between 10 and 72 characters")));
        }
        break;
      default:
        setCustomer(state => ({ ...state, [name]: value }));
    }
  }

  async function orderFormHandler(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setServerError("");

    if (formErrors.size > 0) return;

    const userQueryResult = await createUserHandler(customer);

    if (userQueryResult.response?.code === 400 || userQueryResult.response?.code === 403) {
      (userQueryResult.response.data?.email) ? setServerError("This email address is already registered") : setServerError(userQueryResult.response.message);
      return;
    }

    const preparedCartItems = cartItems.map(item => ({ productId: item.product.id, productName: item.product.name, productQuantity: item.productQuantity }));

    const order:Partial<Order> = {
      cartItems: JSON.stringify(preparedCartItems),
      userId: userQueryResult.id,
      total: cartProductsTotal,
      status: "submitted"
    }

    const orderQueryResult = await createOrderHandler(order);

    if (orderQueryResult.response?.code === 400 || orderQueryResult.response?.code === 403) {
      setServerError(userQueryResult.response.message);
      return;
    }

    emptyCart();
    navigate("/shop");
  }

  return (
    <>
      <form className={styles["order-form"]} onSubmit={event => orderFormHandler(event)}>
        <div>
          <label htmlFor="name" className={styles["order-form-label"]}>Name</label>
          <input type="text" name="name" id="name" required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="surname" className={styles["order-form-label"]}>Surname</label>
          <input type="text" name="surname" id="surname" required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="email" className={styles["order-form-label"]}>Email</label>
          <input type="email" name="email" id="email" required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="password" className={styles["order-form-label"]}>Password</label>
          <input type="password" name="password" id="password" required autoComplete="on" onChange={event => inputHandler(event)} />
        </div>
        <button type="submit" className={styles["order-form-cta"]}>Order Now</button>
      </form>

      { (formErrors.size > 0) && [...formErrors.entries()].map( ([errorKey, errorMessage]) => <Notification key={errorKey} type="failure" message={errorMessage} /> ) }

      { serverError && <Notification type="failure" message={serverError} /> }
    </>
  )
}