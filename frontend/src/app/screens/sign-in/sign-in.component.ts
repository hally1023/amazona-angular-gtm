import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { userSignin } from '../../actions/user/signin.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';

  loading: boolean | undefined;
  error: any;

  userSignIn$ = this.store
    .select((state) => state.userSignIn)
    .subscribe((userSignin) => {
      this.loading = userSignin.loading;
      this.error = userSignin.error;
    });

  onSubmit() {
    this.store.dispatch(
      userSignin({ email: this.email, password: this.password })
    );
  }

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
