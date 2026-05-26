import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.css'],
})
export class NavbarComponent {
  @Input() page?: string;

  constructor(private router: Router) {}


  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
