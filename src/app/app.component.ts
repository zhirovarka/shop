import { takeUntil } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';
import { FilterService } from './services/filter.service';
import { GetItemsSuccess } from './store/actions/item.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { DataService } from './services/data.service';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { selectBasketItemListLength } from './store/selectors/basket.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Магазин';
  public footer = 'Подвал магазина';
  public logo: string;

  public isLogin$ = this.auth.user$;
  public isLoading: boolean = true;
  public basketCounter$ = this.store.select(selectBasketItemListLength);

  public displayName: string = '';
  public email: string = '';

  private destroyer$: Subject<void> = new Subject();

  constructor(
    private store: Store<IAppState>,
    private dataService: DataService,
    public filter: FilterService,
    private router: Router,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
    this.auth.user$.pipe(takeUntil(this.destroyer$)).subscribe((val) => {
      this.isLoading = false;
      if (!!val) {
        this.displayName = val.displayName;
        this.email = val.email;
      }
    });
    this.logo = environment['logo'];
    this.dataService.getData().subscribe((data) => {
      this.store.dispatch(new GetItemsSuccess(data));
    });
  }

  public goToBasketPage(): void {
    this.router.navigate(['basket']);
  }

  public authorizeUser(): void {
    this.auth.googleSign().subscribe();
  }

  public unauthorizeUser(): void {
    this.auth.signOut().subscribe();
  }

  public ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }
}
