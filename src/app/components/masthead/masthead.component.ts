import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectIsUserLoggedIn,
  selectLoggedInUserName,
} from 'src/app/features/auth/states';
import { AuthEvents } from 'src/app/features/auth/states/actions/auth.actions';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css'],
})
export class MastheadComponent {
  userName$ = this.store.select(selectLoggedInUserName);
  isLoggedIn$ = this.store.select(selectIsUserLoggedIn);

  constructor(private readonly store: Store) {}

  logIn() {
    this.store.dispatch(AuthEvents.requested());
  }

  logOut() {
    this.store.dispatch(AuthEvents.logoff());
  }
}
