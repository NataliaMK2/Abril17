import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hijo',
  template: `
    <div>
      <h2>{{ mensajeDelPadre }}</h2>
    </div>
  `,
})
export class HijoComponent {
  @Input() mensajeDelPadre: string;
}
