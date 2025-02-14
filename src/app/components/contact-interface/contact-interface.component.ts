import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router, RouterLinkActive } from '@angular/router';
import { ButtonMenuComponent } from '../button-menu/button-menu.component';

@Component({
  selector: 'app-contact-interface',
  imports: [
    RouterOutlet,
    RouterLink,
    ButtonMenuComponent,
    RouterLinkActive
  ],
  templateUrl: './contact-interface.component.html',
  styleUrl: './contact-interface.component.css'
})
export class ContactInterfaceComponent {
  constructor(private router: Router){}
  onClick(){
    this.router.navigateByUrl('contact-list')
  }
}
