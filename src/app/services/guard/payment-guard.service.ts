import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map, take, switchMap } from 'rxjs/operators';
import { selectBasketItemList } from 'src/app/store/selectors/basket.selector';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PaymentGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private store: Store,
    private router: Router,
    private notification: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.auth.user$.pipe(
      take(1),
      map((val) => !!val),
      switchMap((isLogin) =>
        this.store.select(selectBasketItemList).pipe(
          take(1),
          map((data) => {
            if (!!data.length && isLogin) {
              return true;
            } else {
              this.router.navigate(['/']);
              this.notification.open(
                'Авторезуйтесь и заполните корзину для перехода к оплате',
                null,
                { duration: 4000 }
              );
              return false;
            }
          })
        )
      )
    );
  }
}
