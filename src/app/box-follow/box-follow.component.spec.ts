import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFollowComponent } from './box-follow.component';

describe('BoxFollowComponent', () => {
  let component: BoxFollowComponent;
  let fixture: ComponentFixture<BoxFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
