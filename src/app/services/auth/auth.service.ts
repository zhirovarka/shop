import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import auth = firebase.auth;
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public flag: boolean;
  public user$: Observable<firebase.User | null>;

  constructor(private angAuthService: AngularFireAuth) {
    this.user$ = this.angAuthService.authState;
  }

  public googleSign(): Observable<auth.UserCredential> {
    const provider = new auth.GoogleAuthProvider();
    return from(this.angAuthService.signInWithPopup(provider)).pipe(
      tap((authUser: auth.UserCredential) => {
        console.log('authUser: ', authUser);
      }),
      take(1)
    );
  }

  public signOut(): Observable<void> {
    return from(this.angAuthService.signOut()).pipe(take(1));
  }

  // public getUserInfo(): boolean {
  //   this.user$.pipe(take(1)).subscribe((val) => {
  //     return !!val;
  //   });
  // }
}
