import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  private _data: any[] = [];
  currentPage = 1;
  @Input() pageSize = 5;

  @Input() set data(value: any[]) {
    this._data = value ?? [];
    this.currentPage = 1;
  }

  get data(): any[] {
    return this._data;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.data.length / this.pageSize));
  }

  get pagedData(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  selectPage(page: number): void {
    this.currentPage = Math.min(this.totalPages, Math.max(1, page));
  }

  prevPage(): void {
    this.selectPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.selectPage(this.currentPage + 1);
  }
}
