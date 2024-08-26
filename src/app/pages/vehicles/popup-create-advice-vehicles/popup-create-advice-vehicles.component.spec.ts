/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupCreateAdviceVehiclesComponent } from './popup-create-advice-vehicles.component';

describe('PopupCreateAdviceVehiclesComponent', () => {
  let component: PopupCreateAdviceVehiclesComponent;
  let fixture: ComponentFixture<PopupCreateAdviceVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCreateAdviceVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreateAdviceVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
