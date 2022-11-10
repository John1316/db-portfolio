import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date:any;
  constructor(
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.date = new Date().getFullYear()
  }
  navigateTosayHello(){
    this._Router.navigate(['/say-hello'])
  }
}
