import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  : number=0;
  distconst: number=0;
  gastoreais: number=0;
  barra: number = 0;

  constructor() {}

  calcularOCusto ()
  {
   let distconst = distanciaviagem / conslitro; 

    if(this.gastoreais <30)
      this.barra = 25;
    else if(this.gastoreais <60)
      this.barra=50;
    else if(this.gastoreais<120)
      this.barra =75;
    else
      this.barra=100;
  }
}