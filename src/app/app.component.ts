import { FilterService } from './services/filter.service';
import { GetItemsSuccess } from './store/actions/item.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { DataService } from './services/data.service';
import { GetFilterColors, GetFilterSizes } from './store/actions/filter.actions';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'Магазин';
  public footer = 'Подвал магазина';
  public logo: string;

  constructor(private store: Store<IAppState>, private dataService: DataService, public filter: FilterService) { }

  public ngOnInit(): void {
    this.logo = environment.logo;
    this.dataService.getData().subscribe(data => {
      this.store.dispatch(new GetItemsSuccess(data));

      /*const uniqueSizes =  data.reduce((accum, item) => accum.concat(item.size), [])
        .filter((item, index, self) => self.indexOf(item) === index);
      const uniqueColors = Array.from(new Set(data.reduce((accum, item) => accum.concat(item.color), [])));
      this.store.dispatch(new GetFilterColors(uniqueColors));
      this.store.dispatch(new GetFilterSizes(uniqueSizes));*/
    });
  }
}
