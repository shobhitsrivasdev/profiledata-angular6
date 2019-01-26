import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  sIndex: number = null;
  @Input('peoples') peoples;
  @Output() getProfile = new EventEmitter<any>();
  @Output() getActiveUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  getUserData(userId) {

    this.getProfile.emit(userId);
  }
  activateClass(people){
    this.getActiveUser.emit(people);
  }
  

}
