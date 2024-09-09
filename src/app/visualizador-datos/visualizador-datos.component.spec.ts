import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorDatosComponent } from './visualizador-datos.component';

describe('VisualizadorDatosComponent', () => {
  let component: VisualizadorDatosComponent;
  let fixture: ComponentFixture<VisualizadorDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizadorDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizadorDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
