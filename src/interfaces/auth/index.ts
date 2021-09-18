export interface UserInterface {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordConfirmation: string
}

export interface UserReducerState {
  user: null | UserInterface
  loandingRegister: boolean
  errorRegister: null | string
}

export interface UserLoginReducerState {
  user: null | UserInterface
  loandingLogin: boolean
  errorLogin: null | string
}

export type ActionReducerType = {
  type: string
  payload?: any
}
