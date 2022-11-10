import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private _HttpClient:HttpClient) { }
  showReviews(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/reviews`)
  }
  addReview(reviewData: any):Observable<any>{
    return this._HttpClient.post(
      `${environment.apiUrl}send-review`,
      reviewData
    )
  }
}
