import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  redirect = '/';

  onSubmit() {
    this.store.dispatch(
      userSignin({ email: this.email, password: this.password })
    );
  }

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.userAuth)
      .subscribe((userAuth) => {
        this.loading = userAuth.loading;
        this.error = userAuth.error;
        this.route.queryParams.subscribe((queryParams) => {
          const redirect = queryParams.redirect
            ? queryParams.redirect
            : this.redirect;

          this.redirect = redirect;

          if (userAuth.userInfo) {
            this.router.navigate([redirect]);
          }
        });
      });
  }
}
