import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.scss'
})
export class DemoBindingsComponent {

  formateur: string = 'Seb';
  platDuJour: string = '...[Tchouk le boutton]...';
  plats: string[] = ["un kebab","une pizza","de la chèvre","un burger"];

  genererPlat(): void{
    this.platDuJour = this.plats[Math.floor(Math.random()*this.plats.length)];
  }
}
