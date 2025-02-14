import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth'
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Users } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth)
  private firestore = inject(Firestore)

  async signUp(userData: Users, password: string){
    const userCredential = await createUserWithEmailAndPassword(this.auth, userData.email, password)
    const user = userCredential.user;

    const userDocRef = doc(this.firestore, `users/${user.uid}`)

    await setDoc(userDocRef,{
      uid: user.uid,
      nom: userData.nom,
      prenom: userData.prenom,
      email: userData.email
    })

    return user

  }

  async signIn(email:string, password: string){
    const userCredential = await signInWithEmailAndPassword(this.auth,email, password)
    return userCredential.user
  }




  //login method
  // login(email: string, password: string){
  //   this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
  //     localStorage.setItem('token', 'true')
  //     this.router.navigateByUrl('contact-interface')
  //   }, err=>{
  //     alert('Something went wrong')
  //     this.router.navigateByUrl('connexion-page')
  //   })
  // }

  // register method
  // register(email: string, password: string){
  //   this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
  //     this.router.navigateByUrl('connexion-page/')
  //     alert('succesxsful')
  //   }, err=>{
  //     alert(err.message)
  //     this.router.navigateByUrl('connexion-page/signin')
  //   })
  // }

  //sign out
  // logout(){
  //   this.fireauth.signOut().then(()=>{
  //     localStorage.removeItem('token')
  //     this.router.navigateByUrl('')
  //   }, err=>{
  //     alert(err.message)
  //   })
  // }

}
