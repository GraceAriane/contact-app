import { Component, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component'
import { Router, RouterLink } from '@angular/router';
import { MenuComponent } from '../menu/menu.component'
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    RouterLink,
    MenuComponent, 
    FooterComponent 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit():void{
    const textElement = document.querySelectorAll('.login-text')
    const divElement = document.querySelector('.home')
    if(textElement || divElement){
      textElement.forEach((textE)=>{
        textE.classList.add('anime-text')
      }) 
      divElement?.classList.add('animated-bg')
    }
  }

  constructor(private router: Router){}

  onContinue(){
    this.router.navigateByUrl('connexion-page');
  }
}
