import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CasestudyService {
  // caseStudies: any[] = [
  //   {
  //     id: 1,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Automotive/ElMasria.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 2,
  //     clientName: 'VLCC',
  //     imageSrc: 'assets/images/Portfolio/Medical/VLCC.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 3,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Automotive/NUIT.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 4,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Business/NBD.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 5,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Business/saib.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 6,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Business/we.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 7,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Education/EDUGATE.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 8,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Education/EGEC.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 9,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Education/Harvest.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 10,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Education/Instituto.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 11,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/F&B/Classic.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 12,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/F&B/KOI.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 13,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/F&B/Monginis.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 14,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/F&B/Ritonka.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 15,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/F&B/Turbo.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 16,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/F&B/ZiSushi.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 17,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Furniture/Arthouse.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 18,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Furniture/Danube.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 19,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Furniture/Divano.jpg',
  //     description: 'lorem10',
  //   },
  //   {
  //     id: 20,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Furniture/EDGEC.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 21,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Furniture/Rennie.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 22,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Last/AbdElLatiefGameel.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 23,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Last/DawryJameel.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 24,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Medical/ElEzaby.jpg',

  //     description: 'lorem10',
  //   },
  //   {
  //     id: 25,
  //     clientName: 'Zi sushi',
  //     imageSrc: 'assets/images/Portfolio/Medical/LOreal.jpg',

  //     description: 'lorem10',
  //   },
  // ];
  constructor(private _HttpClient:HttpClient) {}
  getCaseStudies(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}caseStudyData`)
  }
  getCaseStudyDetail(id:number): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}caseStudysingledata/${id}`)
  }
  getCaseStudyModel(id:number): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}caseStudyModels/${id}`)
  }
  getCaseStudyImages(id:number): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}caseStudyImages/${id}`)
  }
}
