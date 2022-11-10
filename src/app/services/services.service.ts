import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _HttpClient:HttpClient) { }
  getServices(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}services`)
  }
  getServicesDetails(id:any): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}service/${id}`)
  }

}
