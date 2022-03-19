import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Injectable, EventEmitter } from '@angular/core';
import { Filter } from '../interfaces/filter.interface';

@Injectable({providedIn: 'root'})
export class FilterService {
  public filter: Filter = {};
  public sendData = new EventEmitter();

  constructor(public location: Location, public route: ActivatedRoute) {
    /*this.route.queryParams.subscribe(res => {
      for (const key in res) {
        if (res[key]) {
          this.filter[key] = res[key];
        }
      }
      this.sendData.emit(this.filter);
    });*/
  }

  public setFilter(property: string, filter: string | number): void {
    this.filter[property] = filter;
    const params: string[] = [];
    for (const key in this.filter) {
      if (this.filter[key]) {
        params.push(key + '=' + this.filter[key]);
      }
    }
    if (params.length > 0) {
      this.location.replaceState('?' + params.join('&'));
    }
    else {
      this.location.replaceState('');
    }
    this.sendData.emit(this.filter);
  }

  public getFilter(): Filter {
    return this.filter;
  }

  public clearFilter(): void {
    this.filter = {};
    this.location.replaceState('');
    this.sendData.emit(this.filter);
  }
}
