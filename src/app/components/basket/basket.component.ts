import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  public ngOnInit(): void {
    console.log('init basket');
  }

  public ngOnDestroy(): void {}
}
