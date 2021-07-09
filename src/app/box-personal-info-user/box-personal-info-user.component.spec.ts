import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPersonalInfoUserComponent } from './box-personal-info-user.component';

describe('BoxPersonalInfoUserComponent', () => {
  let component: BoxPersonalInfoUserComponent;
  let fixture: ComponentFixture<BoxPersonalInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPersonalInfoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPersonalInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
