import { Component, OnInit } from '@angular/core';
import { FacebookService , InitParams} from 'ngx-facebook';
import { NgxSpinnerService } from "ngx-spinner";
import { fromEvent , Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  onlineEvent!: Observable<Event>;
  offlineEvent!: Observable<Event>;
  subscriptions: Subscription[] = [];

  connectionStatusMessage!: string;
  connectionStatus!: string;
  onlineStatusImg!: string;
  constructor(private _NgxSpinnerService:NgxSpinnerService, private _FacebookService:FacebookService){

    // this._NgxSpinnerService.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this._NgxSpinnerService.hide();
    // }, 5000);
  }
  // title = 'ng-db-porfolio';

  // ngOnInit(): void {
  //     const InitParams: InitParams = {
  //       xfbml: true ,
  //       version: 'v3.2'
  //     }
  //     this._FacebookService.init(InitParams)
  // }
  ngOnInit(): void {

    // this.initFacebookService();
    document.onkeydown = function (e) {
      e = e || window.event;//Get event

      if (!e.ctrlKey) return;

      var code = e.which || e.keyCode;//Get key code

      switch (code) {
          case 83://Block Ctrl+S
          case 87://Block Ctrl+W -- Not work in Chrome and new Firefox
              e.preventDefault();
              e.stopPropagation();
              break;
      }
    };
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Back to online';
      this.onlineStatusImg = 'assets/images/internet_restored.png';

      this.connectionStatus = 'online';
      console.log('Online...');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
      this.onlineStatusImg = 'assets/images/no_internet.png';
      this.connectionStatus = 'offline';
      console.log('Offline...');
    }));
  }
  // private initFacebookService(): void {
  //   const initParams: InitParams = { xfbml:true, version:'v2.0'};
  //   this._FacebookService.init(initParams);
  // }




  ngOnDestroy(): void {
    /**
    * Unsubscribe all subscriptions to avoid memory leak
    */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
