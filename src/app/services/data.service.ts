import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(environment.apiUrl);
  }

  public getImage(url: string): Observable<any> {
    return this.httpClient.get(url, {observe: 'response', responseType: 'blob'});
  }
}
