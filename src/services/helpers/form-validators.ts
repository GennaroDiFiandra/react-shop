export function validateEmail(email:string) {
  return email.includes("@") && email.includes(".");
}

export function validatePassword(password:string) {
  return password.length >= 10 && password.length <= 72;
}