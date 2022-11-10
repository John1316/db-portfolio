import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerImage } from 'src/app/classes/banner-image';
import { Casestudy } from 'src/app/classes/casestudy';
import { Service } from 'src/app/classes/service';
import { BannerService } from 'src/app/services/banner.service';
import { HomeService } from 'src/app/services/home.service';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  loading = true;
  clients: Casestudy[] =[];
  services: Service[] =[];
  bannerImage: BannerImage[] = [];
  serviceImage='https://digitalbondmena.com/services/';
  studyCaseImage = 'https://digitalbondmena.com/clients/';

  constructor(private _ServicesService:ServicesService,
    private _BannerService:BannerService,
    private _Title:Title,
    private _HomeService:HomeService
    ) {
      _Title.setTitle('Digital Bond | Services')

   }

  ngOnInit(): void {
    this.showServices();
    this.showBanner();
    this.showClients();
  }
  showBanner(){
    this.loading = true

    this._BannerService.getBanner().subscribe(
      (resposne) => {
        this.bannerImage = resposne.bannerImages
        // this.loading = false

      }
    )
  }
  showClients(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response => {
        this.clients = response.clients;

        this.loading= false
      })
    )

  }
  showServices(){
    this.loading = true
    this._ServicesService.getServices().subscribe(
      (response) => {
        this.services = response.services
        this.loading = false
      }
    )
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
}
