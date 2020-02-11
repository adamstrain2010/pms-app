import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user.model';
import { Store } from '@ngrx/store';
import * as LoginActions from './../login.actions';
import { LoginState } from './../login.state';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User = new User();

  constructor(
    private store: Store<LoginState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  tryLogin = () => {
    console.log("test");
    // this.store.dispatch(LoginActions.tryLogin({payload: this.user}))
    this.router.navigateByUrl('/availability');
  }
}
