import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserserviceService } from '../services/userservice.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let debugEle: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEle = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test that when the clicked function', () => {
    var button = debugEle.query(By.css(".btn-click"));
    // test that when the clicked function in ts file called , the value of (isOn) variable, will be true
    button.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.isOn).toBeTrue();
    // test that when the clicked function in ts file called again , the value of (isOn) variable, will be false
    button.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.isOn).toBeFalse();
  });
});




