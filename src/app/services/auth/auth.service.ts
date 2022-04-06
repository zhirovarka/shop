import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";


@Injectable({
providedIn: 'root',
})
export class AuthService {
  public flag: boolean;
  public user$: Observable<firebase.User>
}
