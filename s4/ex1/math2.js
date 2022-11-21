const EULER_CONSTANT = 2.71

const logistic = (x) => 1 / (1 + EULER_CONSTANT ** -x)

export {
  EULER_CONSTANT,
  logistic
}