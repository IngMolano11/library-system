import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  // bindeo la clase .collapsed sobre el host <app-sidebar>
  @HostBinding('class.collapsed') collapsed = false;

  // registro de submenus abiertos
  openSubmenus: Record<string, boolean> = {};

  toggle() {
    this.collapsed = !this.collapsed;
  }

  toggleSubmenu(key: string) {
    // si está colapsado lo abrimos antes de mostrar submenu
    if (this.collapsed) {
      this.collapsed = false;
    }
    this.openSubmenus[key] = !this.openSubmenus[key];
  }

  isOpen(key: string): boolean {
    return !!this.openSubmenus[key];
  }
}
