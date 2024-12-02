import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span>My store</span
      ><app-primary-button
        label="Armin's button"
        (btnClicked)="handleButtonClick()"
      ></app-primary-button>
      <app-primary-button label="Hello" (btnClicked)="handleHelloClick()" />
    </div>
  `,
  styles: `

  `,
})
export class HeaderComponent {
  handleButtonClick() {
    alert('button click handled');
  }
  handleHelloClick() {
    alert('Hello click handled');
  }
}
