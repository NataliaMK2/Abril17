import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: `
    <p>
      {{ mensaje }}
    </p>
  `,
})
export class HijoComponent {
  @Input() mensaje: string;
}
