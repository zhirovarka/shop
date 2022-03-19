import { FilterService } from './../../services/filter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { map } from 'rxjs/operators';
import { Item } from 'src/app/interfaces/item.interface';
import { Filter } from 'src/app/interfaces/filter.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'goods-component',
    style: 'width: 100%'
  }
})
export class GoodsComponent implements OnInit {
  constructor(
    private store: Store<IAppState>,
    public filterService: FilterService
  ) {
    this.filterService.sendData.subscribe((res) => {
      this.currentFilter = res;
      this.generatePage();
    });
  }

  public data: Observable<Item[]>;
  public currentFilter: Filter;

  public ngOnInit(): void {
    this.currentFilter = this.filterService.getFilter();
    this.generatePage();
  }

  public generatePage(): void {
    this.data = this.store.select('items').pipe(map((data) => data.items));
    if (this.currentFilter.searchText) {
      this.data = this.data.pipe(map(data => data.filter(item => item.title.indexOf(this.currentFilter.searchText) !== -1)));
    }
    if (this.currentFilter.priceFrom) {
      this.data = this.data.pipe(map(data => data.filter(item => item.price >= this.currentFilter.priceFrom)));
    }
    if (this.currentFilter.priceTo) {
      this.data = this.data.pipe(map(data => data.filter(item => item.price <= this.currentFilter.priceTo)));
    }
    if (this.currentFilter.color) {
      this.data = this.data.pipe(map(data => data.filter(item => item.color.indexOf(this.currentFilter.color) !== -1)));
    }
    if (this.currentFilter.size) {
      this.data = this.data.pipe(map(data => data.filter(item => item.size.indexOf(this.currentFilter.size) !== -1)));
    }
    switch (this.currentFilter.sort) {
      case 'priceLow': {
        this.data = this.data.pipe(map(data => [...data].sort((a, b) => sort(a, b, 'price'))));
        break;
      }
      case 'priceHigh': {
        this.data = this.data.pipe(map(data => [...data].sort((a, b) => sort(a, b, 'price', 1))));
        break;
      }
      case 'rateHigh': {
        this.data = this.data.pipe(map(data => [...data].sort((a, b) => sort(a, b, 'rating', 1))));
        break;
      }
    }

    function sort(itemA: Item, itemB: Item, prop: string, invert = -1): number {
      return (itemA[prop] - itemB[prop]) * -1 * invert;
    }
  }
}
