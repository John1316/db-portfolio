import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-status',
  templateUrl: './internet-status.component.html',
  styleUrls: ['./internet-status.component.scss']
})
export class InternetStatusComponent implements OnInit {
  @Input() onlineStatusMessage!: string;
  @Input() onlineStatus!: string;
  @Input() onlineStatusImg!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
