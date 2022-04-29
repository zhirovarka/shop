import { AuthService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { selectBasketItemList } from 'src/app/store/selectors/basket.selector';
import { BasketItems } from 'src/app/store/state/basket.state';
import { DeleteItemInBasketSuccess } from 'src/app/store/actions/basket.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  public basket$ = this.store.select(selectBasketItemList);

  public isLogin$ = this.auth.user$;

  private destroyer$: Subject<void> = new Subject();

  constructor(
    private store: Store,
    private router: Router,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  public deleteItem(event: number) {
    this.store.dispatch(new DeleteItemInBasketSuccess({ id: event }));
  }

  public navigateToItem(card: BasketItems): void {
    this.router.navigate([`/product/${card.item._id.$oid}`]);
  }

  public buyItems(): void {
    console.log('buy items!!!');
    this.router.navigate(['payment']);
  }
}
