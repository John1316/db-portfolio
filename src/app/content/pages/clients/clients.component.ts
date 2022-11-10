import { trigger, transition, animate, style } from '@angular/animations'
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerImage } from 'src/app/classes/banner-image';
import { Casestudy } from 'src/app/classes/casestudy';
import { BannerService } from 'src/app/services/banner.service';
import { CasestudyService } from 'src/app/services/casestudy.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('slide', [
        transition(':enter', [
          style({
            transform: 'translateY(100%)',
          }),
          animate(400,
            style({
              transform: 'translateY(0)',
            })
          )
        ]),
        transition(':leave', [
          style({}),
          animate(400,
            style({
              transform: 'translateY(0%)',
            })
          )
        ])
      ])
    ]
})
export class ClientsComponent implements OnInit {
  loading= false;
  caseStudies: Casestudy[] = [];
  banner!:BannerImage;
  caseStudyImage='https://digitalbondmena.com/case-study/';
  constructor(private _CasestudyService:CasestudyService,
    private _BannerService:BannerService,
    private _Title:Title
    ) {
      _Title.setTitle('Digital Bond | Case studies')
  }
  getCaseStudies(){

    this.loading = true ;
    this._CasestudyService.getCaseStudies().subscribe(
      (response => {
        this.caseStudies = response.caseStudys
        this.loading= false
      })
    )
  }
  showCasStudybanner(){
    this.loading = true ;

    this._BannerService.getBanner().subscribe(
      (response)=> {
        this.banner = response.bannerImages[0];
        console.log(response.bannerImages[0]);

        this.loading = false;
      }
    )
  }
  caseStudiesSlider: OwlOptions ={
    loop: true,
    margin:40,
    autoplay: true,

    center: true,
    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },

      940: {
        items: 3
      },
      1024: {
        items: 3
      }
    },
    nav:true
  }
  ngOnInit(): void {
    this.getCaseStudies();
    this.showCasStudybanner();
  }

}
