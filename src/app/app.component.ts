import { Component, OnInit } from '@angular/core';
import { GetProfileService } from './services/get-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vlocity-challenge-shobhit';
  peoples = [];
  currentUser = [];
  filteredUser = [];
  allPeople = [];

  constructor(public UserProfile: GetProfileService) {

  }

  ngOnInit() {
    this.getAllPeoples();
  }

  getAllPeoples() {
    this.UserProfile.getProfiles()
      .subscribe(data => {
        this.peoples = data.People;
        console.log(this.peoples);
        this.allPeople = this.peoples;
        this.peoples.forEach(element => {
          element.active = false;

        });
        this.peoples[0].active = true;
        this.currentUser = this.peoples[0];
      },
        error => { }
      );
  }
  activateClass(people) {
    this.peoples.forEach(element => {
      if (element == people) {
        element.active = true;
        this.currentUser = element;
        console.log(this.currentUser['name'])
      }
      else {
        element.active = false;
      }

    });

  }
  getFilteredDetail(name) {
    this.peoples = this.allPeople.filter(element =>
       element.name.toLowerCase().includes(name.toLowerCase()));
       this.peoples.forEach(element => {
        element.active = false;

      });
  }
} 