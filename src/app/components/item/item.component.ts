import { environment } from './../../../environments/environment';
import { DataService } from './../../services/data.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit, OnDestroy {
  @Input()
  public item: Item;
  public mainImg: string;
  public noImage = environment['noImage'];
  // public noImage = environment.noImage;

  private subscriber: Subscription;
  private destroy: Subject<any> = new Subject();

  constructor(public dataService: DataService) { }

  public ngOnInit(): void {
    this.subscriber = this.dataService.getImage(this.item.images[0]).pipe(take(1)).subscribe(response => {
      this.mainImg = response.status === 200 ? this.item.images[0] : 'no-image';
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
