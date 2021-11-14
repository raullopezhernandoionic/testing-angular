import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-basic',
  templateUrl: './components-basic.component.html',
  styleUrls: ['./components-basic.component.scss']
})
export class ComponentsBasicComponent {

  public isOn = false;

  get message() {

    return `La luz esta ${this.isOn ? 'Encendida' : 'Apagada'}`;


    // if (this.isOn) {
    //   return 'La luz esta encendida';
    // } else {
    //   return 'La luz esta apagada'
    // }
  }

  clicked(): void {

    this.isOn = !this.isOn;

    // if (this.isOn) {
    //   this.isOn = false;
    // } else {
    //   this.isOn = true;
    // }
  }

}
