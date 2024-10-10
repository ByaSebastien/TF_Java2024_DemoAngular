export interface Person {
  lastname: string;
  firstname: string;
  birthday: Date;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
  siblings: number;
  country: string;
  single: boolean;
}
