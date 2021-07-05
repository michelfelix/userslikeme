import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPageNameComponent } from './box-page-name.component';

describe('BoxPageNameComponent', () => {
  let component: BoxPageNameComponent;
  let fixture: ComponentFixture<BoxPageNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPageNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPageNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
