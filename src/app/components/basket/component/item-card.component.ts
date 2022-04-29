import { Store } from '@ngrx/store';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BasketItems } from 'src/app/store/state/basket.state';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit, OnDestroy {
  @Input() card: BasketItems;

  @Output() cardToDelete: EventEmitter<number> = new EventEmitter();

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log(this.card);
  }

  public deleteCard(): void {
    this.cardToDelete.emit(this.card.id);
  }

  ngOnDestroy(): void {}
}
