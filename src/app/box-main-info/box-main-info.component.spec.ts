import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMainInfoComponent } from './box-main-info.component';

describe('BoxMainInfoComponent', () => {
  let component: BoxMainInfoComponent;
  let fixture: ComponentFixture<BoxMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMainInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
