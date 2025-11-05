import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCard } from '../shared/material-card/material-card';
import type { Book } from '../../interfaces/Book';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, MaterialCard],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class Catalog implements OnInit {
  loading = false;
  books: Book[] = [];

  ngOnInit() {
    this.loading = true;
    // Simulate API call
    setTimeout(() => {
      this.books = [
        {
          id: 1,
          title: 'Introducción a Angular',
          authors: ['John Doe', 'Jane Smith'],
          cover: './imagen.jpg',
          publisher: 'Tech Books',
          year: 2023,
          language: 'Español',
          pages: 350,
          isbn: '978-0-123456-78-9',
          location: 'Estante A-1',
          status: 'available',
          availableCopies: 3,
          totalCopies: 5,
          shortDescription: 'Una guía completa para aprender Angular desde cero.'
        },
        {
          id: 2,
          title: 'TypeScript Avanzado',
          authors: ['Alice Johnson'],
          cover: './imagen.jpg',
          publisher: 'Dev Press',
          year: 2022,
          language: 'Español',
          pages: 280,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-2',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Domina TypeScript y sus características avanzadas.'
        },
        {
          id: 3,
          title: 'Angular en la Práctica',
          authors: ['Bob Brown'],
          cover: './imagen.jpg',
          publisher: 'Practica Books',
          year: 2023,
          language: 'Español',
          pages: 300,
          isbn: '978-0-123456-78-9',
          location: 'Estante A-2',
          status: 'available',
          availableCopies: 2,
          totalCopies: 4,
          shortDescription: 'Aprende a usar Angular en proyectos reales.'
        },
        {
          id: 4,
          title: 'JavaScript Moderno',
          authors: ['Charlie Davis'],
          cover: './imagen.jpg',
          publisher: 'Modern JS Books',
          year: 2022,
          language: 'Español',
          pages: 250,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-3',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Domina JavaScript moderno.'
        },
        {
          id: 5,
          title: 'Node.js y Express',
          authors: ['Diana Garcia'],
          cover: './imagen.jpg',
          publisher: 'Node Books',
          year: 2023,
          language: 'Español',
          pages: 320,
          isbn: '978-0-123456-78-9',
          location: 'Estante A-3',
          status: 'available',
          availableCopies: 3,
          totalCopies: 5,
          shortDescription: 'Aprende Node.js y Express.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
        {
          id: 6,
          title: 'React y Angular',
          authors: ['Eve Wilson'],
          cover: './imagen.jpg',
          publisher: 'React Books',
          year: 2022,
          language: 'Español',
          pages: 270,
          isbn: '978-0-987654-32-1',
          location: 'Estante B-4',
          status: 'borrowed',
          availableCopies: 0,
          totalCopies: 3,
          shortDescription: 'Aprende React y Angular.'
        },
      ];
      this.loading = false;
    }, 600);
  }

  trackById(index: number, item: Book) {
    return item?.id ?? index;
  }

  onView(book: Book) {
    console.log('View', book);
  }
  onReserve(book: Book) {
    console.log('Reserve', book);
  }
  onFavorite(book: Book) {
    console.log('Favorite', book);
  }
  onEdit(book: Book) {
    console.log('Edit', book);
  }
  onRemove(book: Book) {
    console.log('Remove', book);
  }
}
