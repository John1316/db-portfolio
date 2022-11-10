import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private _HttpClient:HttpClient) { }
  getAboutusPage(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}about-us`)
  }

}
