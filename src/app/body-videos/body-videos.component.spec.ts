import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVideosComponent } from './body-videos.component';

describe('BodyVideosComponent', () => {
  let component: BodyVideosComponent;
  let fixture: ComponentFixture<BodyVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
