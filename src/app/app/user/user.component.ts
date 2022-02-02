import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isOn = false;
  welcome: string|undefined;
  text = 'my dog has fleas.';
  name="hi mona"
  constructor(private _UserserviceService:UserserviceService) { }

  ngOnInit(): void {

    this.welcome = this._UserserviceService.isLoggedIn ?
    'Welcome, ' + this._UserserviceService.user.name : 'Please log in.';
  }
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
