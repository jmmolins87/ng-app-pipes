import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  public title: string = 'Pipes Básicos';
  public mainText: string = 'Pipes incluidas en Angular - Usualmente en el Common Module';
  public nameLower: string = 'JUANMA';
  public nameUpper: string = 'molins';
  public fullName: string = 'jUAnmA moLiNs'
  public customDate = new Date();

}
