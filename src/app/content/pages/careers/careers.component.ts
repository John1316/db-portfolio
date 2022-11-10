import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { AccordionConfig } from "ngx-bootstrap/accordion";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]

})

export class CareersComponent implements OnInit {
  thankyou:boolean = false;
  loadingSpinner!:boolean;
  loading!:boolean;
  careers: any[]= [];
  constructor(
    private _HomeService:HomeService,
    private _AccordionConfig:AccordionConfig,
    private _ToastrService:ToastrService
  ) { }
  showCareers(){
    this._HomeService.getCareers().subscribe(
      (response) => {
        this.careers = response.jobCategorys;
      }
    )
  }
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
    console.log(careerForm.value);
  }
  ngOnInit(): void {
    this.showCareers();
    console.log(this._AccordionConfig.closeOthers = true);
  }

}

