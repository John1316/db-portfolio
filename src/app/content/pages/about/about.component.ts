import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { tap, delay } from 'rxjs';
import { AboutUs } from 'src/app/classes/about-us';
import { BannerImage } from 'src/app/classes/banner-image';
import { Casestudy } from 'src/app/classes/casestudy';
import { Review } from 'src/app/classes/review';
import { Team } from 'src/app/classes/team';
import { AboutUsService } from 'src/app/services/about-us.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  loading= false;
  aboutUsPage = 'https://digitalbondmena.com/about_us_page/';
  studyCaseImage = 'https://digitalbondmena.com/clients/';
  feedbackImage = 'https://digitalbondmena.com/feedbacks/';
  clients: Casestudy[] = [];
  reviews: Review[] =[];

  aboutUs!: AboutUs;
  pageBanner: BannerImage[] = [];
  teams: Team[] = [];
  constructor(
    private _AboutUsService:AboutUsService,
    private _HomeService:HomeService,
    private _Title:Title
  ) {
      this._Title.setTitle('Digital Bond | About us')
  }
  showClients(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response => {
        this.clients = response.clients;
        this.reviews = response.feedbacks;

        this.loading= false
      })
    )

  }
  showAboutUsSection(){
    this.loading = true ;

    this._AboutUsService.getAboutusPage().subscribe(
      (response)=> {

        this.aboutUs = response.aboutUsPage;

        this.loading = false
      }
    )
  }


  ngOnInit(): void {
    this.showAboutUsSection();
    this.showClients()
  }
  portfolio: OwlOptions = {
    loop: true,
    margin:40,
    autoplay: true,

    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/left_slider.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/right_slider.png"></a>`],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4,

      },
      940: {

        items: 4
      },
    },
    nav:true
  }
  testimonials: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/left_slider.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/right_slider.png"></a>`],

    nav: true,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },

      1024: {
        items: 2
      }
    }
  }
}
