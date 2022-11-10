import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SayhelloService {

  constructor(private _HttpClient:HttpClient) { }
  getSayHello(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}bannerImages`)
  }
}
