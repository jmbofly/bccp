import { Validators } from '@angular/forms';

export interface AuthDialogData {
  type: 'login' | 'register';
  methods: any;
}

export class DialogFormBase {
  field: string;
  state: any;
  validators: Validators;
  type: string;
}

export interface UserInputModel {
  fullName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
  provider?: 'emailandpassword' | 'google' | 'facebook';
}

export const REGISTER_GROUP: DialogFormBase[] = [
  {
    field: 'fullName',
    state: '',
    validators: [Validators.required, Validators.minLength],
    type: 'text',
  },
  { field: 'email', state: '', validators: [Validators.required, Validators.email], type: 'email' },
  {
    field: 'password',
    state: '',
    validators: [Validators.required, Validators.pattern],
    type: 'password',
  },
  { field: 'passwordConfirm', state: '', validators: [Validators.required], type: 'password' },
];
export const EMAIL_LOGIN_GROUP: DialogFormBase[] = [
  { field: 'email', state: '', validators: [Validators.required], type: 'email' },
  { field: 'password', state: '', validators: [Validators.required], type: 'password' },
];
