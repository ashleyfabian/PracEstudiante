import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectornumComponent } from './selectornum.component';

describe('SelectornumComponent', () => {
  let component: SelectornumComponent;
  let fixture: ComponentFixture<SelectornumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectornumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectornumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
