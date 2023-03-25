import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UptickNews';

  loggedIn: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.user.subscribe((user: User) => {
      this.loggedIn = !!user;
    });
  }
}
