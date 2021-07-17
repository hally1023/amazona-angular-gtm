import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userDetails } from 'src/app/actions/user/details.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.userAuth)
      .subscribe((userAuth) => {
        if (userAuth.userInfo) {
          this.store.dispatch(userDetails({ userId: userAuth.userInfo._id }));
        }
      });
  }
}
