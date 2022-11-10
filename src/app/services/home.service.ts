import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) {}
  getHome(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}general-data`)
  }

  getCareers():Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}jobCategory`)
  }

  getCareerDetails(id:number): Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}jobData?job_id=${id}`, id)
  }
  postCareerForm(
    name: any,
    phone:any,
    email: any,
    position: any,
    experience: any,
    file: File,
    cover_letter:any
  ):Observable<any>{
    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('position', position);
    formData.append('experience', experience);
    formData.append('file', file);
    formData.append('cover_letter', cover_letter);
    return this._HttpClient.post(`${environment.apiUrl}submitJobForm`, formData)
  }
}
