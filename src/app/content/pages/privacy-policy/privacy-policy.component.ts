import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private _Title:Title
    ) { 
      _Title.setTitle('Digital Bond | Contact us')

    } 

  ngOnInit(): void {
  }

}
