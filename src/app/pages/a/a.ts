import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { Table } from '../../components/table/table';
import dados from '../../../dados.json';

@Component({
  standalone: true,
  selector: 'app-a',
  imports: [
    NavbarComponent,
    Table
  ],
  templateUrl: './a.html',
  styleUrls: ['./a.css'],
})
export class A {
  tableData = dados.a;
}
