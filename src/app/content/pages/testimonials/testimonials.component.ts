import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BannerImage } from 'src/app/classes/banner-image';
import { Review } from 'src/app/classes/review';
import { BannerService } from 'src/app/services/banner.service';
import { HomeService } from 'src/app/services/home.service';
import { ReviewsService } from 'src/app/services/reviews.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  loading = true;
  loadingSpinner = false;
  thankyou = false;
  reviews: Review[] =[];
  error = '';
  banners: BannerImage[]=[];
  reviewImage='https://digitalbondmena.com/feedbacks/';
  constructor(
    private _BannerService:BannerService ,
     private _HomeService:HomeService  ,
     private _ReviewsService:ReviewsService ,
      private _Router:Router,
          private _Title:Title
    ) { 
      _Title.setTitle('Digital Bond | Reviews')


       }
  testimonialForm:FormGroup = new FormGroup({
    'name': new FormControl('',Validators.required) ,
    'email': new FormControl('',[Validators.required , Validators.email]),
    'job_title': new FormControl('',Validators.required),
    'type': new FormControl('review',Validators.required),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
    'message': new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.showbanner();
    this.showReviews()
  }
  showbanner(){
    this.loading = true ;

      this._BannerService.getBanner().subscribe(
        (response)=> {
          this.banners = response.bannerImages;
          this.loading = false;
        }
      )

  }
  showReviews(){
    this.loading = true ;

    this._HomeService.getHome().subscribe(
      (response) => {
        this.reviews = response.feedbacks;
        this.loading = false;
      }
    )
  }
  testimonials:OwlOptions = {
    loop: true,
    // center: true,
    dots: false,
    margin:30,
    autoplay: false,
    navSpeed: 700,
    navText: [`<a class='circle border-0 center' id='team-circle-left'><img src="assets/images/logo/arrow_black_left.png"></a>`
    , `<a class='circle border-0 center' id='team-circle-right'><img src="assets/images/logo/arrow_black_right.png"></a>`],

    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },

      940: {

        items: 1,
        stagePadding:200
      },
      1600: {

        items: 1,
        stagePadding:200
      }
    }
  }



  onSubmit(testimonialForm:FormGroup){
    this.loadingSpinner = true
    this._ReviewsService.addReview(testimonialForm.value).subscribe(
      (response) => {
        this.loadingSpinner = false

        if(response.success){
          this.thankyou = true
        }

      }, error => {
        this.loadingSpinner = false

        if (error.error) {
          this.error = error
        }

      }
    )
  }
}
