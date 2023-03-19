import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorLandingComponent } from './administrator-landing.component';

describe('AdministratorLandingComponent', () => {
  let component: AdministratorLandingComponent;
  let fixture: ComponentFixture<AdministratorLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
