import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input('currentUser') currentUser:any;
  totalRatings=[1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
