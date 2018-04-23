import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogin:boolean=false;
  isLoggedIn$: Observable<boolean>;   
   
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authentication.isLoggedIn;
  }

  logout() {
    this.authentication.logout();
  }

}
