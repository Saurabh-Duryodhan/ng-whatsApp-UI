import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message: string = '';
  status: string = '';
  tick: string = '';

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.status === 'online' ? 'yellowgreen' : '#ff3300';
  }

  enterKeyEvent(event: any) {
    event.key !== 'Enter' || this.message === ''
      ? (this.message = '')
      : this.sendMessage(event);
    event.key === 'Enter' ? this.clearEvent(event) : null;
  }

  sendMessage(event: Event) {
    const elems = document.createElement('p');
    elems.innerHTML = this.message;
    elems.classList.add('message');
    const sended = document.querySelector('.user-message')?.appendChild(elems);
  }

  clearEvent(event: Event) {
    (<HTMLInputElement>event.target).value = '';
  }

  handleInput(event: Event) {
    this.message = (<HTMLInputElement>event.target).value;
  }
}
