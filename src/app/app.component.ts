import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SelectornumComponent} from './selectornum/selectornum.component';
import {VisualizadorDatosComponent} from './visualizador-datos/visualizador-datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectornumComponent, VisualizadorDatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'compu';

   misDatos = [
    {nombre: 'Juan', edad: 30, dob: '1994-05-15', ciudad: 'Madrid'},
    {nombre: 'María', edad: 25, dob: '1999-12-03', ciudad: 'Barcelona'},
    {nombre: 'Pedro', edad: 40, dob: '1984-08-20', ciudad: 'Valencia'}
  ];
  
}
