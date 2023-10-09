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
  public nameLower: string = 'juanma';
  public nameUpper: string = 'MOLINS';
  public fullName: string = 'jUAnmA moLiNs'

}
