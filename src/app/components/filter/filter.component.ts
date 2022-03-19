import { Filter } from './../../interfaces/filter.interface';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from './../../services/filter.service';
import { Component, OnInit, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
})
export class FilterComponent implements OnInit, AfterViewInit {
  constructor(
    public filterService: FilterService,
    public store: Store<IAppState>,
    public route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  public uniqueSizes: string[];
  public uniqueColors: string[];

  public currentSearch: string;
  public currentPriceFrom: number;
  public currentPriceTo: number;
  public currentSize: string;
  public currentColor: string;
  public currentSort: string;

  public setColor = new EventEmitter();
  public setSize = new EventEmitter();
  public setSort = new EventEmitter();

  public currentFilter: Filter;

  public ngOnInit(): void {
    this.store.select('items').pipe(map((items) => items.items)).subscribe((items) => {
      if (items && items.length > 0) {
        this.uniqueSizes = items.reduce((accum, item) => accum.concat(item.size), [])
          .filter((item, index, self) => self.indexOf(item) === index);
        this.uniqueColors = Array.from(
          new Set(items.reduce((accum, item) => accum.concat(item.color), []))
        );
      }
    });
    this.currentFilter = this.filterService.getFilter();
    this.route.queryParams.subscribe((filterValues) => {
      if (Object.keys(filterValues).length > 0) {
        for (const key in filterValues) {
          if (filterValues[key]) {
            this.changeFilter(key, filterValues[key]);
          }
        }
        this.currentFilter = this.filterService.getFilter();
      }
    });
  }

  public ngAfterViewInit(): void {
    this.updateControls();
    this.cdRef.detectChanges();
  }

  public updateControls(): void {
    this.currentSearch = this.currentFilter.searchText ? this.currentFilter.searchText : undefined;
    this.currentPriceFrom = this.currentFilter.priceFrom ? this.currentFilter.priceFrom : undefined;
    this.currentPriceTo = this.currentFilter.priceTo ? this.currentFilter.priceTo : undefined;
    this.currentSize = this.currentFilter.size ? this.currentFilter.size : '';
    this.currentColor = this.currentFilter.color ? this.currentFilter.color : '';
    this.currentSort = this.currentFilter.sort ? this.currentFilter.sort : '';
    this.setColor.emit(this.currentColor);
    this.setSize.emit(this.currentSize);
    this.setSort.emit(this.currentSort);
  }

  public changeFilter(property: string, value: string | number): void {
    this.filterService.setFilter(property, value);
  }

  public clearFilter(): void {
    this.currentSearch = '';
    this.currentPriceFrom = undefined;
    this.currentPriceTo = undefined;
    this.setColor.emit();
    this.setSize.emit();
    this.setSort.emit();
    this.filterService.clearFilter();
  }
}
