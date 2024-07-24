export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
  repeatedPassword : string;
  terms: boolean;
};
