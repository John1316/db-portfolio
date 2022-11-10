import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { ToastrService } from "ngx-toastr";
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-careers-details',
  templateUrl: './careers-details.component.html',
  styleUrls: ['./careers-details.component.scss']
})
export class CareersDetailsComponent implements OnInit {
  thankyou:boolean = false;
  loadingSpinner!:boolean;
  loading!:boolean;
  otherCategories: any[] = [];
  anotherCategories: any[] = [];
  jobDetails: any;
  constructor(
    private _HomeService:HomeService,
    private _ActivatedRoute:ActivatedRoute,
    private _ToastrService:ToastrService,
    private _ViewportScroller:ViewportScroller
  ) { }
  careerForm: FormGroup=  new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3) ,Validators.pattern(/^([^0-9]*)$/)]),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
    'email': new FormControl('', [Validators.required, Validators.email , Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),

    'position' : new FormControl('', [Validators.required]),
    'experience' : new FormControl('', [Validators.required]),
    'cover_letter' : new FormControl(''),
    'file' : new FormControl('', [Validators.required]),
  })
  file(event:any){
    const file = event.target.files ? event.target.files[0] : '';
    this.careerForm.patchValue({
      file: file
    })
    this.careerForm.get('file')?.updateValueAndValidity()
  }
  onSubmit(careerForm:FormGroup){
    this._HomeService.postCareerForm(
      careerForm.value.name,
      careerForm.value.phone,
      careerForm.value.email,
      careerForm.value.position,
      careerForm.value.experience,
      careerForm.value.file,
      careerForm.value.cover_letter
    ).subscribe(
      (response) => {
        this._ToastrService.success('Your information sent successfully','Sent',{
          positionClass:'toast-bottom-center', timeOut: 2000
        })
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }
  scrollToElement() {
    this._ViewportScroller.scrollToAnchor('submitForm')
  }
    showCareerDetails(){
      this._ActivatedRoute.paramMap.subscribe(
        (params:Params) => {
          this._HomeService.getCareerDetails(params['params'].id).subscribe(
            (response) => {
              this.otherCategories = response.otherJobs
              this.jobDetails = response.jobData;
              this._HomeService.getCareers().subscribe(
                (response) => {
                  const datajob = response.jobCategorys.filter(
                    (response :any) => {
                      return response.id != params['params'].id
                    }
                  )
                  datajob.forEach((element:any) => {

                    this.anotherCategories = element.job_data_re

                  });
                  // console.log(datajobArray);
                }
              )
            }
            )
          }
          )

        }
  ngOnInit(): void {
    this.showCareerDetails();
  }

}
