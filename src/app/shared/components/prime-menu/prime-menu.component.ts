import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'prime-menu',
  templateUrl: './prime-menu.component.html',
  styles: [
  ]
})
export class PrimeMenuComponent {

  itemsMenu: MenuItem[] | undefined;

  constructor() { }

  ngOnInit() {
    this.itemsMenu = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otras opciones',
            icon: 'pi pi-cog'
          }
        ]
      }
    ]
  }

}
