import { Injectable } from '@angular/core';
import { Firestore ,collectionData} from '@angular/fire/firestore';
import { addDoc, collection, doc, deleteDoc } from 'firebase/firestore';
import { ContactElement } from '../models/contact-element';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private fs:Firestore){

  }
  getContacts(){
    let contactsCollection = collection(this.fs,'contacts');
    return collectionData(contactsCollection,{idField: 'id'});
  }
  addContacts(prenom:string, nom:string, numero:number){
    
    let data = new ContactElement(prenom, nom, numero);
    let contactsCollection = collection(this.fs,'contacts');
    return addDoc(contactsCollection,data);
    //pour ajouter on utilise addDoc
  }
  deleteContacts(id:string){
    let docRef = doc(this.fs,'contacts/'+id);
    return deleteDoc(docRef);
    //pour supprimer on utiliser deleteDoc
  }
}
