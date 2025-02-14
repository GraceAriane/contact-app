import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ConnexionPageComponent } from './components/connexion-page/connexion-page.component';
import { ContactInterfaceComponent } from './components/contact-interface/contact-interface.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

export const routes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'connexion-page', component: ConnexionPageComponent, children:[
        {path: '', redirectTo:'login', pathMatch: 'full'},
        {path: 'login', component : LoginComponent},
        {path: 'signin', component: SigninComponent}
    ]},
    {path: 'contact-interface', component: ContactInterfaceComponent, children:[
        {path: '', redirectTo:'contact-list', pathMatch: 'full'},
        {path: 'contact-list', component: ContactListComponent, children:[
            
        ]},
        {path: 'contact-list/:id', component: ContactDetailComponent}
    ]}
];
