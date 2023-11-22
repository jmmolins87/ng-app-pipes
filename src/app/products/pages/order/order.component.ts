import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public title: string = 'Pipes Personalizados';
  public mainText: string = 'Creados por'; 
  public isUpperCase: boolean = false;
  public heros: Hero[] = [
    {
      name: 'Superman',
      canFly: true, 
      color: Color.blue 
    },
    {
      name: 'Batman',
      canFly: false, 
      color: Color.black 
    },
    {
      name: 'Daredevil',
      canFly: false, 
      color: Color.red 
    },
    {
      name: 'Robin',
      canFly: false, 
      color: Color.red 
    },
    {
      name: 'Linterna Verda',
      canFly: true, 
      color: Color.green 
    }
  ];

  changeToggle(): void {
    this.isUpperCase = !this.isUpperCase;
  }

}
