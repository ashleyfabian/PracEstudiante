import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selectornum',
  standalone: true,
  imports: [],
  templateUrl: './selectornum.component.html',
  styleUrl: './selectornum.component.css'
})
export class SelectornumComponent {
@Input() minimo: number= 1;
@Input() maximo: number= 1;
actual: number =1;

incrementar(){
if (this.actual < this.maximo) {
  this.actual++;
}

}
 
decrementar(){
  if (this.actual > this.minimo) {
    this.actual--;
  }

}

fijar(v:number){
  if (v>= this.minimo && v<= this.maximo) {
    this.actual=v;
  }
  
}

}
