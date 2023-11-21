import { Component } from '@angular/core';


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: []
})
export class UncommonPageComponent {

  public title: string = 'Pipes Numéricos';
  public mainText: string = 'Pipes incluidas en Angular - Usualmente en el Common Module';

  // i18nSelect
  public name: string = 'Juanma';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  changeGuest(): void {
    this.name = 'María';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Fernando', 'Juanma,', 'Luís,', 'Melissa,', 'Natalia' ];
  clientsMap = { '=0': 'no tenemos ningún cliente esperando.', '=1': 'tenemos 1 cliente esperando.', 'other': 'tenemos # clientes esperando.' }

  deleteClient(): void {
    this.clients.pop();
  }

}
