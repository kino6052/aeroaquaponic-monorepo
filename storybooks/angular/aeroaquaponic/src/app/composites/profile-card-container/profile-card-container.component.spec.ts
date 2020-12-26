import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardContainerComponent } from './profile-card-container.component';

describe('ProfileCardContainerComponent', () => {
  let component: ProfileCardContainerComponent;
  let fixture: ComponentFixture<ProfileCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
