import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPhotoComponent } from './box-photo.component';

describe('BoxPhotoComponent', () => {
  let component: BoxPhotoComponent;
  let fixture: ComponentFixture<BoxPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
