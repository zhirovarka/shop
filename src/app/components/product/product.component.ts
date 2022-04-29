import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Item } from 'src/app/interfaces/item.interface';
import { map, filter, take } from 'rxjs/operators';
import { AddItemInBasketSuccess } from 'src/app/store/actions/basket.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public checkedSize: string;
  public checkedColor: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private router: Router,
    private notification: MatSnackBar
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
      const count = { ...val };
      console.log(count);
      count.size = [this.checkedSize];
      count.color = [this.checkedColor];
      if (!!this.checkedSize && !!this.checkedColor) {
        const randomizeId = Date.now();
        this.store.dispatch(
          new AddItemInBasketSuccess({
            item: count,
            count: this.counter,
            id: randomizeId,
          })
        );
        this.notification.open('Добавлено в карзину', null, { duration: 4000 });
      } else {
        this.notification.open('Выберите цвет и/или размер товара', null, {
          duration: 4000,
        });
      }
    });
  }

  public choiceSize(size: string) {
    console.log(size);
    this.checkedSize = size;
  }

  public choiceColor(color: string) {
    console.log(color);
    this.checkedColor = color;
  }

  public goToBasketPage(): void {
    this.router.navigate(['basket']);
  }
}
