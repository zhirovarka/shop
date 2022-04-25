import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Item } from 'src/app/interfaces/item.interface';
import { map, filter, take } from 'rxjs/operators';
import { AddItemInBasketSuccess } from 'src/app/store/actions/basket.actions';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'product-component',
    style: 'width: 100%',
  },
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private router: Router
  ) {}

  public id: string;
  public item: Observable<Item>;
  public counter: number = 1;

  public ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.item = this.store
      .select('items')
      .pipe(
        map((data) => data.items.find((item) => item._id.$oid === this.id))
      );
  }

  public incrimentCounter(): void {
    this.counter = ++this.counter;
  }

  public dicrimentCounter(): void {
    if (this.counter > 1) {
      this.counter = --this.counter;
    }
  }

  public addItemInBasket(): void {
    this.item.pipe(take(1)).subscribe((val) => {
      console.log('fucking val:', val);
      console.log(this.counter);
      this.store.dispatch(
        new AddItemInBasketSuccess({ item: val, count: this.counter })
      );
    });
  }

  public goToBasketPage(): void {
    this.router.navigate(['basket']);
  }
}
