import { selectItemList } from './../selectors/item.selector';
import { EItemsActions, GetItemSuccess, ItemActions, GetItemsSuccess } from './../actions/item.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private store: Store<IAppState>) { }

  @Effect()
  getItem$ = this.actions$.pipe(
    // ofType(ItemActions.GetItemSuccess),

  );
}
