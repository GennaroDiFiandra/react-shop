import { useCartStore } from "@/services/";
import { MiniCart } from "@/components/";

export function Aside() {
  const isCartOpen = useCartStore( state => state.isCartOpen );

  return (
    <>
      {
        isCartOpen && <MiniCart />
      }
    </>
  )
}