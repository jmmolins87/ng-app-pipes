import { Component } from '@angular/core';

@Component({
  selector: 'app-number-page',
  templateUrl: './number-page.component.html',
  styles: [
  ]
})
export class NumberPageComponent {

  public title: string = 'Pipes Numéricos';
  public mainText: string = 'Pipes incluidas en Angular - Usualmente en el Common Module';
  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;

}
