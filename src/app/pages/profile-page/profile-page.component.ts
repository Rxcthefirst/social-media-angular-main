import { Target } from '@angular/compiler';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { EditProfileComponent } from 'src/app/components/profile/edit-profile/edit-profile.component';
import Post from 'src/app/models/Post';
import { IProfile, IProfileHeroBanner, IProfilePersonalInfo } from 'src/app/models/Profile';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnDestroy {

  routerEventSubscription: Subscription;
  activatedRouteSubscription: Subscription;

  id: number;
  isEditable = true;

  posts!: Post[];
  user!: User;

  profileHeroBanner: IProfileHeroBanner = { 
    firstName: '', 
    lastName: '', 
    currentCity: '', 
    currentCountry: '', 
    backgroundImageUrl: '',
    avatarImageUrl: ''
  };

  profilePersonalInfo: IProfilePersonalInfo = {
    bornCity: '',
    bornCountry: '',
    martialStatus: '',
    jobTitle: '',
    companyName: '',
    companyUrl: '',
    schoolName: ''
  }

  constructor(private authService: AuthService, private postService: PostService, 
              public dialog: MatDialog, public router: Router, private profileService: ProfileService,
              private activatedRoute: ActivatedRoute) 
  {
    /* A hook detects event of changing route inside of a profile */
    this.routerEventSubscription = router.events
      .pipe( filter(event => event instanceof NavigationEnd))
      .subscribe((val) => {

      this.isEditable = true;

      /* Defined parameters if provided and makes appropriate request to Profile API */
      this.activatedRouteSubscription = this.activatedRoute.queryParams
        .pipe( filter( params =>  params['id']) )
        .subscribe( params => {
          this.isEditable = false;

          this.profileService.getProfile(params['id']).subscribe({
            next: (profile : IProfile) => {
              this.manageProfileHeroBanner(profile);
              this.manageProfilePersonalInfo(profile);
            },
            error: (errorResponse) => {
              this.router.navigate(['/404']);
            }
          }) 
        }
      );

      /* Allows edit profile accessed on /profile route */
      if (this.isEditable) {
        this.profileService.getOwnProfile().subscribe( (profile: IProfile) => {
          this.isEditable = true;
          this.manageProfileHeroBanner(profile);
          this.manageProfilePersonalInfo(profile);
        })

        /* Restored session and takes userPosts */
        this.authService.restoreSession().subscribe( user => {
          this.user = user;
    
          this.postService.userPosts(this.user.id).subscribe( posts => {
            this.posts = posts;
          })
        })
      }
    });
  }

  /* Filled everything needed for ProfileHeroBanner component */
  private manageProfileHeroBanner(profile: IProfile) {
    const { backgroundImageUrl, currentCity, currentCountry, owner } = profile;

    this.profileHeroBanner = {
      backgroundImageUrl: backgroundImageUrl != null ? backgroundImageUrl : '',
      currentCity: currentCity != null ? currentCity : 'London',
      currentCountry: currentCountry != null ? currentCountry : 'UK',
      avatarImageUrl: owner.avatarImageUrl != null ? owner.avatarImageUrl : 'https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png',
      firstName: owner.firstName,
      lastName: owner.lastName
    }
  }

  private manageProfilePersonalInfo(profile: IProfile) {
      const { bornCity, bornCountry, martialStatus, jobTitle, companyName, companyUrl, schoolName} = profile;

      this.profilePersonalInfo = {
        bornCity,
        bornCountry,
        martialStatus,
        jobTitle,
        companyName,
        companyUrl,
        schoolName
      }
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
    this.activatedRouteSubscription.unsubscribe();
  };
}
