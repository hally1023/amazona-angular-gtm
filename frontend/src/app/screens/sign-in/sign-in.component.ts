import { Component, OnInit } from '@angular/core';

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

    console.log({ email: this.email, password: this.password });
  }
  constructor() {}

  ngOnInit(): void {}
}
