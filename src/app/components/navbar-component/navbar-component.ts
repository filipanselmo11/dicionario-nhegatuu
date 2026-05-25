import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.css'],
})
export class NavbarComponent {
  @Input() page?: string;
}
