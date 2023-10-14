import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { LoginAuthService } from '../Services/login-auth.service';
import Swal from 'sweetalert2';
import { LoginAuthService } from '../Services/login/login-auth.service';
// import { LoginAuthService } from '../Services/login/login-auth.service';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const adminService = inject(LoginAuthService);
  const router = inject(Router);
  if (adminService.isAdminLoggedIn()) {
    return true;
  } else {
    Swal.fire({
      title: 'Please login first',
      icon: 'warning',
      timer: 4000,
      showConfirmButton: true
    });
    router.navigate(['/login']);
    return false;
  }
};