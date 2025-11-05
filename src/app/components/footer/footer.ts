import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear: number = new Date().getFullYear();
  
  socialLinks = [
    { name: 'Facebook', url: '#', icon: 'facebook.svg' },
    { name: 'Twitter', url: '#', icon: 'twitter.svg' },
    { name: 'Instagram', url: '#', icon: 'instagram.svg' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin.svg' }
  ];
}
