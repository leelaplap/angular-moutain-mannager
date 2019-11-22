import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainCreateComponent } from './mountain-create.component';

describe('MountainCreateComponent', () => {
  let component: MountainCreateComponent;
  let fixture: ComponentFixture<MountainCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
