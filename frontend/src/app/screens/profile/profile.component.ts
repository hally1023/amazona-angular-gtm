import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userDetails } from 'src/app/actions/user/details.actions';
import { userUpdateProfile } from 'src/app/actions/user/update-profile.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  detailsLoading: Boolean | undefined;
  detailsError: any;

  updateLoading: Boolean | undefined;
  updateSuccess: Boolean | undefined;
  updateError: any;

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      this.store.dispatch(
        userUpdateProfile({
          user: {
            email: this.email,
            name: this.name,
            ...(this.password !== '' && {
              password: this.password,
            }),
          },
        })
      );
    }
  }

  ngOnInit(): void {
    this.store
      .select((state) => state.userAuth)
      .subscribe((userAuth) => {
        if (userAuth.userInfo) {
          this.store.dispatch(userDetails({ userId: userAuth.userInfo._id }));
        }
      });

    this.store
      .select((state) => state.userDetails)
      .subscribe((userDetails) => {
        if (userDetails.user) {
          this.email = userDetails.user.email;
          this.name = userDetails.user.name;
          this.detailsLoading = userDetails.loading;
          this.detailsError = userDetails.error;
        }
      });

    this.store
      .select((state) => state.userUpdateProfile)
      .subscribe((userUpdateProfile) => {
        this.updateSuccess = userUpdateProfile.success;
        this.updateError = userUpdateProfile.error;
        this.updateLoading = userUpdateProfile.loading;
      });
  }
  constructor(private store: Store<State>) {}
}
