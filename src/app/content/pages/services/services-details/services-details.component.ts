import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerImage } from 'src/app/classes/banner-image';
import { BannerService } from 'src/app/services/banner.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {
  loading = true ;
  serviceDetails:any;

  otherServicesArray: any[]= [];
  bannerImage!:BannerImage;
  serviceImage='https://digitalbondmena.com/services/';
  serviceBannerImage= 'https://digitalbondmena.com/banner_images/';
  indexForNumbers!: number;
  constructor(private _ServicesService:ServicesService ,
    private _ActivatedRoute:ActivatedRoute,
    private _BannerService:BannerService,
    private _Title:Title,
    private _Router:Router
    ) {}
  showServicesDetails(){
    this.loading = true ;

    this.indexForNumbers = this._ActivatedRoute.snapshot.params["id"];
    this._ServicesService.getServicesDetails(this.indexForNumbers)
    .subscribe((data) => {
      this.serviceDetails = data.service[0];
      this._Title.setTitle(`Digital Bond | ${this.serviceDetails?.en_title}`)
      this.loading = false
    });
  }
  showOtherServicesDetails(){
    this.loading = true ;

    this.indexForNumbers = this._ActivatedRoute.snapshot.params["id"];
    this._ServicesService.getServicesDetails(this.indexForNumbers)
    .subscribe((data) => {
      this.otherServicesArray = data.otherSecives;
    });
  }
  showBannerImage(){
    this.loading = true ;

    this._BannerService.getBanner().subscribe(
      (response) => {
        this.bannerImage = response.bannerImages[0]
        // this.loading = false
      }
    )
  }
  servicesSlider: OwlOptions = {

    loop: true,
    margin:40,
    autoplay: true,

    dots: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

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
  navigateOnUrl(id:number){
    this._Router.onSameUrlNavigation = 'reload';
    this._Router.navigate([`/services/${id}`]);
    this.showServicesDetails();
  }
  ngOnInit(): void {
    this.showServicesDetails();
    this.showBannerImage();
    this.showOtherServicesDetails();
  }

}
