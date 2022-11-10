import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BannerImage } from 'src/app/classes/banner-image';
import { BannerService } from 'src/app/services/banner.service';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loading= true;
  error ='';
  loadingSpinner = false;
  thankyou = false;
  formStatus = false;
  banner!: BannerImage;
  constructor(
    private _BannerService:BannerService,
    private _ContactService:ContactService,
    private _Router:Router,
    private _Title:Title,
    private _Renderer2:Renderer2
    ) {
      _Title.setTitle('Digital Bond | Contact us')

    }
  showContactbanner(){
    this.loading = true ;

    this._BannerService.getBanner().subscribe(
      (response)=> {
        this.banner = response.bannerImages[0];
        this.loading = false;
      }
    )
  }
  contactForm:FormGroup = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3) ,Validators.pattern(/^([^0-9]*)$/)]),
    'email': new FormControl('', [Validators.required, Validators.email , Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    'subject': new FormControl('',Validators.required),
    'type': new FormControl('message'),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
  })
  contactFormNext:FormGroup = new FormGroup({
    'message': new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.showContactbanner()
  }




  onSubmit(contactForm:FormGroup){
    // this.loadingSpinner = true;
    console.log(contactForm);
    this.formStatus = true;
    // contactForm.
    localStorage.setItem('contactForm', JSON.stringify(contactForm.value))
    let step2 = document.querySelector('.step2');
    this._Renderer2.addClass(step2, 'active')

    // this._ContactService.addMessage(contactForm.value).subscribe(
    //   (response) => {
    //     this.loadingSpinner = false;
    //     if(response.success){

    //       this.thankyou = true
    //     }

    //   }, error => {

    //     this.loadingSpinner = false;
    //     if (error.error) {

    //       this.error = error
    //     }

    //   }
    // )

  }
  onSubmitNext(contactFormNext : FormGroup){
    let contactFormFirst = JSON.parse(localStorage.getItem('contactForm') || '{}');
    let contactFormLast = contactFormNext.value;
    let contactForm = Object.assign(contactFormFirst, contactFormLast);
    console.log(contactForm);
    this._ContactService.addMessage(
      contactForm
      ).subscribe(

      (response) => {
        this.loadingSpinner = false;
        if(response.success){

          this.thankyou = true
          localStorage.removeItem('contactForm');
          let step1 = document.querySelector('.step1');
          let step2 = document.querySelector('.step2');
          this._Renderer2.removeClass(step1, 'active')
          this._Renderer2.removeClass(step2, 'active')
        }

      }, error => {

        this.loadingSpinner = false;
        if (error.error) {

          this.error = error
        }

      }
    )
  }
}
