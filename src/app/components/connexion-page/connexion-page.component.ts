import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../models/users'

@Component({
  selector: 'app-connexion-page',
  imports: [
    RouterOutlet,
    SigninComponent,
    LoginComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.css'
})
export class ConnexionPageComponent {

  // formIsValid: boolean = false

  // onFormStatutsChange(isValid: boolean){
  //   this.formIsValid = isValid
  // }


  private route = inject(ActivatedRoute)
  isSignIn = false;
  title: string='Welcome Back';

  constructor(private router:Router){
    this.route.url.subscribe(urlSegments =>{
      this.isSignIn = urlSegments.some(segment => segment.path === 'signin')
    })
  }

  private authService = new AuthService()
  loginData?: {email: string; password: string}
  registerData?: {user: Users; password: string}

  handleLogin(data: {email: string; password: string}){
    this.loginData = data
  }

  handleRegister(data: {user: Users; password: string}){
    this.registerData = data
  }

  onActivate(component: any){
    if(component.loginEvent){
      component.loginEvent.subscribe((data: {email: string; password: string})=>{
        this.handleLogin(data)
      })
    }else if(component.registerEvent){
      component.registerEvent.subscribe((data: {user: Users; password: string})=>{
        this.handleRegister(data)
      })
    }
  }

  async handleAction(){
    try{
      if(this.isSignIn && this.loginData){
        await this.authService.signIn(this.loginData.email, this.loginData.password)
        alert('connexion reussie')
        this.router.navigateByUrl('contact-interface');
      }else if(!this.isSignIn && this.registerData){
        await this.authService.signUp(this.registerData.user, this.registerData.password)
        alert('inscription reussie')
        this.router.navigateByUrl('');
        // if(this.formIsValid){
  
        //   alert("connexion reussie")
        // }else{
        //   alert("connexion echouee")
        // }
      }else{
        alert('veuillez remplir tous les champs')
      }
    }catch(error){
      if(error instanceof Error){
        alert(`errrreur: ${error.message}`)
      }else{
        alert('erreur inconnue est survenue')
      }
    }

  }

  setTitle(isSignUp: boolean){
    if(isSignUp===true){
      this.title = 'Welcome You'
    }else{
      this.title = 'Welcome back'
    }
  }

  signIn(){

  }
  logIn(){

  }

}
