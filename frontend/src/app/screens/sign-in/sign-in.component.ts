import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userSignin } from '../../actions/user/signin.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';

  onSubmit(event: any) {
    event.preventDefault();

    this.store.dispatch(
      userSignin({ email: this.email, password: this.password })
    );
  }

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
