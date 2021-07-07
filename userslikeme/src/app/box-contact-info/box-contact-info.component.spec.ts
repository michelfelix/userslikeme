import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContactInfoComponent } from './box-contact-info.component';

describe('BoxContactInfoComponent', () => {
  let component: BoxContactInfoComponent;
  let fixture: ComponentFixture<BoxContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
