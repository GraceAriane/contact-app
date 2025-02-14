import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { Users } from '../../models/users'


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  nom = ''
  prenom = ''
  email = ''
  password = ''

  @Output()  registerEvent = new EventEmitter<{user: Users; password: string}>()

  register(){
    const data = {user:{nom: this.nom, prenom: this.prenom, email: this.email}, password: this.password}
    this.registerEvent.emit(data)
    //{user:{nom: this.nom, prenom: this.prenom, email: this.email}, password: this.password}
  }

}
