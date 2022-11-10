import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) { }

  addMessage(addMessage:any): Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}send-message`,addMessage)
  }
}
