import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-e',
  imports: [
    NavbarComponent,
    Table
  ],
  templateUrl: './e.html',
  styleUrl: './e.css',
})
export class E {}
