import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { Item } from 'src/app/interfaces/item.interface';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'product-component',
    style: 'width: 100%'
  }
})

export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<IAppState>) { }

  public id: string;
  public item: Observable<Item>;

  public ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.item = this.store.select('items').pipe(map(data => data.items.find(item => item._id.$oid === this.id)));
  }
}
