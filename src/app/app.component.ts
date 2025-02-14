import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore } from '@angular/fire/firestore'; // Pour Firestore
import { ContactElement } from './models/contact-element';
import { ContactService } from './services/contact.service';
import { Observable } from 'rxjs';
// import { app } from './firebase-config'; // Importe l'initialisation Firebase
// import { initializeApp } from 'firebase/app';
// import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  constructor(private firestore: Firestore, private contactService: ContactService) {
    // const app = initializeApp(environment.firebase);
    console.log('Firebase initialisé !', this.firestore);
  }

  // Contacts$: Observable<ContactElement[]>;

  // ngOnInit(): void{
  //   this.Contacts$ = this.contactService.getContacts();
  // }
  


}
