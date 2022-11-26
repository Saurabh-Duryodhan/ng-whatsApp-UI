import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message = '';
  status = true;

  setStatus() {
    this.status = true;
  }

  enterKeyEvent(event: any) {
    event.key !== 'Enter' || this.message === '' ? null : this.sendMessage();
  }

  handleInput(event: Event) {
    this.message = (<HTMLInputElement>event.target).value;
  }

  sendMessage() {
    const elems = document.createElement('p');
    elems.innerHTML = this.message;
    elems.classList.add('message');
    const userMessage = document
      .querySelector('.user-message')
      ?.appendChild(elems);
  }
}
