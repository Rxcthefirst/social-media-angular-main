import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { PostFeedPageComponent } from './components/post-feed-page/post-feed-page.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserInitialsPipe } from './pipes/user-initials.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfilePersonalInformationComponent } from './components/profile/profile-personal-information/profile-personal-information.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { EditProfileSidebarComponent } from './components/profile/edit-profile-sidebar/edit-profile-sidebar.component';
import { EditProfileSecuritySettingsComponent } from './components/profile/edit-profile-security-settings/edit-profile-security-settings.component';
import { ProfileHeroBannerComponent } from './components/profile/profile-hero-banner/profile-hero-banner.component';
import { FourOFourPageComponent } from './pages/four-o-four-page/four-o-four-page.component';
import { VoteButtonComponent } from './components/shared/vote-button/vote-button.component';
import { PostDeleteButtonComponent } from './components/shared/post-delete-button/post-delete-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostFeedPageComponent,
    PostComponent,
    CommentComponent,
    UserCardComponent,
    NavbarComponent,
    UserInitialsPipe,
    FriendsPageComponent,
    ProfilePageComponent,
    ProfilePersonalInformationComponent,
    EditProfileComponent,
    EditProfileSidebarComponent,
    EditProfileSecuritySettingsComponent,
    ProfileHeroBannerComponent,
    FourOFourPageComponent,
    VoteButtonComponent,
    PostDeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
