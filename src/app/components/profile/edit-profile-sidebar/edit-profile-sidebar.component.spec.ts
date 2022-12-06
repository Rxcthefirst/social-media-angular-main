import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSidebarComponent } from './edit-profile-sidebar.component';

describe('EditProfileSidebarComponent', () => {
  let component: EditProfileSidebarComponent;
  let fixture: ComponentFixture<EditProfileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
