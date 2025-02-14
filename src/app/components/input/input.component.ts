import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() ioclass!: string;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();






  // isFocused = false;
  // value: string = '';
  // isValid: boolean | null = null;

  // onFocus(){
  //   this.isFocused = true
  // }

  // onBlur(){
  //   this.isFocused = false
  //   this.validateInput()
  // }

  // onInput(event: any){
  //   this.value = event.target.value;
  //   this.emitValue()
  //   this.validateInput()
  // }

  // validateInput(){
  //   if(this.type === 'email'){
  //     this.isValid = /\S+@\S+\.\S+/.test(this.value)
  //   }else if(this.type === 'password'){
  //     this.isValid = this.value.length >=6
  //   }else{
  //     this.isValid = this.value.trim().length > 0 && this.value.trim().length <15
  //   }
  // }

  // emitValue(){
  //   this.valueChange.emit({value: this.value, isValid: this.isValid ?? false})
  // }

  // @HostListener('focusin') onFocus(){
  //   this.isFocused = true
  // }
  // @HostListener('focusout') onBlur(){
  //   this.isFocused = false
  // }
  // @HostListener('input', ['$event']) onInput(event: Event){
  //   this.value = (event.target as HTMLInputElement).value
  //   this.validateInput()
    
  // }

  // validateInput(){
  //   const length = this.value.length;
  //   const verification = document.querySelectorAll('.verif')

  //   switch(this.type){
  //     case 'email':
  //       this.isValid = this.validateEmail(this.value)
  //       if(this.isValid === false){
  //         verification[1].classList.remove('none')
  //       }else{
  //         verification[1].classList.add('none')
  //         verification[0].classList.remove('none')
  //       }
  //     break
  //     case 'password':
  //       this.isValid = length >= 8
  //       if(this.isValid === false){
  //         verification[1].classList.remove('none')
  //       }else{
  //         verification[1].classList.add('none')
  //         verification[0].classList.remove('none')
  //       }
  //     break
  //     case 'text':
  //       this.isValid = length >=6 && length <=15
  //       if(this.isValid === false){
  //         verification[1].classList.remove('none')
  //       }else{
  //         verification[1].classList.add('none')
  //         verification[0].classList.remove('none')
  //       }
  //     break

  //     default:
  //       this.isValid = false;
  //       verification[1].classList.remove('none')

  //     this.valueChange.emit({value: this.value, isValid: this.isValid})
  //   }

    // if(this.type === 'email'){
    //   if(this.isValid === false){
    //     verification[1].classList.remove('none')
    //   }else{
    //     verification[1].classList.add('none')
    //     verification[0].classList.remove('none')
    //   }

    // }else if(this.type === 'password')
  // }

  // validateEmail(email: string): boolean{
  //   const emailPattern = /\S+@\S+\.\S+/;
  //   return emailPattern.test(email);  
  // }


}
