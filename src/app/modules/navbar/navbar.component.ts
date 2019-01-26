import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() searchUser = new EventEmitter<any>();

  @Input('activeUser') activeUser;

  constructor() { }

  ngOnInit() {
    
  }

  searchuser(name) {
    this.searchUser.emit(name);
  }
}

