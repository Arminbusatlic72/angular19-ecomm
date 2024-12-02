import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full px-5 py-2 rounded-xl border shadow-md hover:opacity-90"
      (click)="this.btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input<string>('');
  btnClicked = output();
}
