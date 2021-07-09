import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTitlePageComponent } from './box-title-page.component';

describe('BoxTitlePageComponent', () => {
  let component: BoxTitlePageComponent;
  let fixture: ComponentFixture<BoxTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTitlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
