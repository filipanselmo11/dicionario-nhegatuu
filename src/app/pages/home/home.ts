import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { CardComponent } from '../../components/card-component/card-component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    NavbarComponent,
    CardComponent,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  cards = [
    { title: 'A' },
    { title: 'E' },
    { title: 'I' },
    { title: 'U' },
    { title: 'Ã' },
    { title: 'Ẽ' },
    { title: 'Ĩ' },
    { title: 'Ũ' },
    { title: 'B' },
    { title: 'D' },
    { title: 'G' },
    { title: 'K' },
    { title: 'M' },
    { title: 'N' },
    { title: 'NH' },
    { title: 'P' },
    { title: 'R' },
    { title: 'S' },
    { title: 'T' },
    { title: 'X' },
    { title: 'W' },
    { title: 'Y' },
    { title: 'KW' },
    { title: '-MB-' },
    { title: '-MP-' },
    { title: '-ND-' },
    { title: '-NG-' },
    { title: '-NT-' },

  ];

  constructor(private router: Router) { }


  goToPage(title: string): void {
    const path = title.toLowerCase().replace(/\s+/g, '');
    console.log("PATH: ", path);
    this.router.navigate([`/${path}`]);
  }
}
