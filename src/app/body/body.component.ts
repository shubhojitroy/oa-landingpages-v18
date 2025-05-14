import { Component } from '@angular/core';
import { SecBodyComponent } from './sec-body/sec-body.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SecBodyComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
