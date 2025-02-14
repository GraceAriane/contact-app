import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, Router} from '@angular/router';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    InputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = ''
  password =''

  // email!: string
  // emailValid: boolean = false

  // password!: string;
  // passwordValid: boolean = false

  @Output()  loginEvent = new EventEmitter<{email:string; password: string}>()

  login(){
    const data = {email: this.email, password: this.password}
    this.loginEvent.emit(data)
  }

  // onEmailChange(event: {value:string, isValid:boolean}){
  //   this.email = event.value
  //   this.emailValid= event.isValid
  //   this.emitFormStatus()
  // }

  // onPasswordChange(event: {value:string, isValid:boolean}){
  //   this.password = event.value
  //   this.passwordValid= event.isValid
  //   this.emitFormStatus()
  // }

  // isFormValid(): boolean{
  //   return this.emailValid && this.passwordValid
  // }

  // emitFormStatus(){
  //   this.formStatusLogin.emit(this.isFormValid())
  // }

}
