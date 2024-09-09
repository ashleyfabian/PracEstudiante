import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizador-datos',
  standalone: true,
  imports: [],
  templateUrl: './visualizador-datos.component.html',
  styleUrl: './visualizador-datos.component.css',
})
export class VisualizadorDatosComponent {
@Input() datos: any[] = [];

}
