import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  imports: [],
  template: `
    <button
      (click)="this.btnClicked.emit()"
      class="ml-auto bg-red-500 text-white px-2 py-2 rounded-md mr-2"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class CardButtonComponent {
  label = input<string>('');
  btnClicked = output();
}
