import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaCapoeiraComponent } from './aula-capoeira.component';

describe('AulaCapoeiraComponent', () => {
  let component: AulaCapoeiraComponent;
  let fixture: ComponentFixture<AulaCapoeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulaCapoeiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulaCapoeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
