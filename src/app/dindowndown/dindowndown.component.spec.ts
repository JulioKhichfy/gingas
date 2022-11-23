import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DindowndownComponent } from './dindowndown.component';

describe('DindowndownComponent', () => {
  let component: DindowndownComponent;
  let fixture: ComponentFixture<DindowndownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DindowndownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DindowndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
