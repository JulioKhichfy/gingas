import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySejaComponent } from './body-seja.component';

describe('BodySejaComponent', () => {
  let component: BodySejaComponent;
  let fixture: ComponentFixture<BodySejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodySejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodySejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
