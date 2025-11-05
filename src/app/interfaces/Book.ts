export interface Book {
  id: number;
  title: string;
  authors: string[];
  cover: string;
  publisher: string;
  year: number;
  language: string;
  pages: number;
  isbn: string;
  location: string;
  status: 'available' | 'borrowed' | 'reserved' | 'lost' | 'new';
  availableCopies: number;
  totalCopies: number;
  shortDescription: string;
  tags?: string[];
}
