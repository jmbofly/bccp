import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  AuthDialogData,
  DialogFormBase,
  EMAIL_LOGIN_GROUP,
  REGISTER_GROUP,
  UserInputModel,
} from './auth-dialog';
@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
})
export class AuthDialogComponent implements OnInit {
  form: FormGroup;
  userModel: UserInputModel = {};
  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuthDialogData
  ) {}

  ngOnInit() {
    const registration = this.buildForm(REGISTER_GROUP);
    const emailLogin = this.buildForm(EMAIL_LOGIN_GROUP);
    if (this.data.type === 'login') {
      this.form = emailLogin;
    } else if (this.data.type === 'register') {
      console.log('auth dialog type: ');
      this.form = registration;
    }
  }

  googleLogin() {
    return this.data.methods.googleLogin().then(() => {
      this.data.methods.navigateTo('dashboard');
      this.dialogRef.close({ provider: 'google' });
    });
  }

  // Build new FormGroup depending on Dialog type 'login' | 'register'
  private buildForm(g: any[]) {
    const results = {};
    const fields: string[] = g.find(arr => arr.field);
    const states: string[] = g.map((arr, idx) => (arr.state = this.userModel[fields[idx]]));
    const validators: Validators[] = g.find(arr => arr.validators);
    // Use the index of the field property to get state and validators
    fields.map((field, idx) => {
      // Create new FormControl
      results[field] = new FormControl(states[idx], validators[idx]);
      console.log(results);
    });
    // Return new FormGroup
    return new FormGroup(results);
  }
  // TODO: Create method to return data to dialog parent
  submitAndClose(userInput: UserInputModel) {
    return this.dialogRef.close({ ...userInput });
  }

  //  TODO: Create method to run validation on each input value
  // private validateInput(value: any, validators: Validators[]) {
  // }
}
