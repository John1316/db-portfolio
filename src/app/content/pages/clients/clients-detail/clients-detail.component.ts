import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Casestudy } from 'src/app/classes/casestudy';
import { CasestudyService } from 'src/app/services/casestudy.service';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.scss']
})
export class ClientsDetailComponent implements OnInit {


  loading= true;
  caseStudy: any;
  caseStudies:any[] =[]
  caseStudyImages: Casestudy[]=[];
  caseStudyImage:string='https://digitalbondmena.com/case_study_model_image/';
  caseStudyLogo:string='https://digitalbondmena.com/case-study/';
  caseStudyModels: any[]= [];
  idOfCaseStudy!:number;
  constructor(private _CasestudyService:CasestudyService,
    private _ActivatedRoute:ActivatedRoute,
    private _Title:Title

    ) {

  }
  showCaseStudy(){
    this._ActivatedRoute.paramMap.subscribe(
      (params:Params) => {
        this.loading = true ;

        this._CasestudyService.getCaseStudyDetail(params['params'].id).subscribe(
          (response) => {

            this.caseStudy = response.caseStudyData[0]
            console.log(this.caseStudy);
            this._Title.setTitle(`Digital Bond | ${this.caseStudy?.en_title}`)
            this.loading= false
          }
        )
      }
    )
  }
  showOtherCaseStudies(){
    this._ActivatedRoute.paramMap.subscribe(
      (params:Params) => {
    this._CasestudyService.getCaseStudies().subscribe(
      (response) => {
        const newCaseArray = response.caseStudys.filter((x:any) => {
          return x.id != params['params'].id;
        })
        this.caseStudies = newCaseArray
    })
  })

  }
  showCaseStudyModel(){
    this.idOfCaseStudy = this._ActivatedRoute.snapshot.params["id"];
    this._ActivatedRoute.paramMap.subscribe(
      (params:Params) => {
    this.loading = true ;

    this._CasestudyService.getCaseStudyModel(params['params'].id).subscribe(
    (response)=> {
      this.caseStudyModels = response.caseStudyModels
      this.loading= false

      // console.log(this.caseStudyModels);
    })
  })
  }
  // showCaseStudyImages(){
  //   // this.idOfCaseStudyImageModel = this.
  //   this.idOfCaseStudyModel = this._ActivatedRoute;
  //   this._CasestudyService.getCaseStudyImages(this.idOfCaseStudy).subscribe(
  //     (response)=> {
  //       this.caseStudyImages = response.caseStudyImages
  //       this.loading= false

  //       // console.log(response.caseStudyImages);
  //     })
  // }
  otherCaseStudiesSlider:OwlOptions ={

    loop: true,
    margin:40,
    autoplay: true,

    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/left_slider.png"></a>` , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/right_slider.png"></a>`],

    responsive: {
      0: {
        items: 1

      },
      350:{
        items: 1

      },
      540: {
        items: 2,

      },

      940: {
        items: 2,

      },
      1024: {

        items: 3,
      }
    },
    nav:true
  }
  caseStudiesSlider: OwlOptions ={
    loop: true,
    autoplay: true,
    margin: 0,
    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/left_slider.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/right_slider.png"></a>`],

    items: 1,
    nav:true
  }
  ngOnInit(): void {
    this.showCaseStudy();
    this.showCaseStudyModel();
    this.showOtherCaseStudies()
  }

}
