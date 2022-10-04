import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcareInterfacingComponent } from './icare-interfacing.component';

describe('IcareInterfacingComponent', () => {
  let component: IcareInterfacingComponent;
  let fixture: ComponentFixture<IcareInterfacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcareInterfacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcareInterfacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
