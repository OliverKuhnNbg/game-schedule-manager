import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainNavigationComponent } from './app-main-navigation.component';

describe('AppMainNavigationComponent', () => {
  let component: AppMainNavigationComponent;
  let fixture: ComponentFixture<AppMainNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
