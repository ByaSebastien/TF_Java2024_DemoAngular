import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.scss'
})
export class DemoPipesComponent {

  myString: string = "Hello world!";

  myNumber: number = 42.75613468464164;

  now: Date = new Date();
}
