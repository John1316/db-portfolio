import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/pages/home/home.component';
import { HeaderComponent } from './content/shared/header/header.component';
import { FooterComponent } from './content/shared/footer/footer.component';
import { ToNavbarComponent } from './content/shared/to-navbar/to-navbar.component';
import { CarouselModule  } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './content/pages/testimonials/testimonials.component';
import { LoaderComponent } from './content/shared/loader/loader.component';
import { ClientsComponent } from './content/pages/clients/clients.component';
import { ContactComponent } from './content/pages/contact/contact.component';
import { NotfoundComponent } from './content/shared/notfound/notfound.component';
import { AboutComponent } from './content/pages/about/about.component';
import { ServicesComponent } from './content/pages/services/services.component';
import { ServicesDetailsComponent } from './content/pages/services/services-details/services-details.component';
import { SayhelloComponent } from './content/pages/sayhello/sayhello.component';
import { FacebookModule } from "ngx-facebook";
import { HttpClientModule } from "@angular/common/http";
import { ActionSpinnerComponent } from './content/shared/action-spinner/action-spinner.component';
import { OtherServiceComponent } from './content/pages/services/other-service/other-service.component';
import { PrivacyPolicyComponent } from './content/pages/privacy-policy/privacy-policy.component';
import { ClientsDetailComponent } from './content/pages/clients/clients-detail/clients-detail.component';
import { InternetStatusComponent } from './content/shared/internet-status/internet-status.component';
import { SwiperModule } from 'swiper/angular';
import { CareersComponent } from './content/pages/careers/careers.component';
import { CountUpModule } from "ngx-countup";
import { PopoverModule } from "ngx-bootstrap/popover";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { CareersDetailsComponent } from './content/pages/careers-details/careers-details.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ToNavbarComponent,
    TestimonialsComponent,
    LoaderComponent,
    ClientsComponent,
    ContactComponent,
    NotfoundComponent,
    AboutComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    SayhelloComponent,

    ActionSpinnerComponent,
    OtherServiceComponent,
    PrivacyPolicyComponent,
    ClientsDetailComponent,
    InternetStatusComponent,
    CareersComponent,
    CareersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FacebookModule.forRoot(),
    HttpClientModule,
    CountUpModule,
    AccordionModule.forRoot(),
    PopoverModule.forRoot(),
    ToastrModule.forRoot(),
    SwiperModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
