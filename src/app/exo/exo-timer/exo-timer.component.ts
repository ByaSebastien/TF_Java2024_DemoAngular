import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-timer',
  templateUrl: './exo-timer.component.html',
  styleUrl: './exo-timer.component.scss'
})
export class ExoTimerComponent {

  totalSeconds : number = 0;
  timer: any;

  start(){
    if(this.timer){
      return;
    }
    this.timer = setInterval(() => {
      this.totalSeconds++;
    },10);
  }

  stop() {
    if(!this.timer){
      return;
    }
    clearInterval(this.timer);
    this.timer = undefined;
  }

  reset() {
    if(this.totalSeconds === 0){
      return;
    }
    this.stop();
    this.totalSeconds = 0;
  }
}
