import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { SignupComponent } from '../components/signup/signup.component';
import { SignupComponent } from './signup/signup.component';
// import { UserService } from '../services/userservice/user.service';
import { UserService } from './services/user.service';
export const authGuard: CanActivateFn = (route, state) => {
  const dialog = inject(MatDialog);
  const userService = inject(UserService);

  const user = localStorage.getItem('user');

  if (user) {
    // Optional: check for member status
    // const isMember = userService.isMemberIn; // add logic if needed
    return true;
  }

  // If not logged in, open signup dialog
  dialog.open(SignupComponent, {
    data: { displayName: 'signup' },
    autoFocus: false,
    backdropClass: 'dialog-backdrop',
  });

  return false;
};
