import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrls: ['./card-component.css'],
})
export class CardComponent {
  @Input() cardTitle?: string;
  @Input() cardImage?: string;
  @Output() goToPage = new EventEmitter<string>();
}
