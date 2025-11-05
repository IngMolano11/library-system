import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { Book } from '../../../interfaces/Book';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material-card.html',
  styleUrls: ['./material-card.css']
})
export class MaterialCard {
  @Input() book: Book | null = null;
  @Input() loading = false;
  @Input() showAdmin = false;

  @Output() view = new EventEmitter<Book>();
  @Output() reserve = new EventEmitter<Book>();
  @Output() favorite = new EventEmitter<Book>();
  @Output() edit = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();

  onView() {
    if (this.book) this.view.emit(this.book);
  }

  onReserve() {
    if (this.book) this.reserve.emit(this.book);
  }

  onFavorite() {
    if (this.book) this.favorite.emit(this.book);
  }
}
