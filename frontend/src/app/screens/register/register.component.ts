import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userRegister } from 'src/app/actions/user/register.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      this.store.dispatch(
        userRegister({
          email: this.email,
          name: this.name,
          password: this.password,
        })
      );
    }
  }

  // from store
  loading: boolean | undefined;
  error: any;

  $userAuth = this.store
    .select((state) => state.userAuth)
    .subscribe((userAuth) => {
      this.loading = userAuth.loading;
      this.error = userAuth.error;
    });

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
