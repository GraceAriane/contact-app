import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.css'
})
export class ButtonMenuComponent {
  @Input() label!: string;
  @Input() counter!: number;
  @Input() link!: string;

}
