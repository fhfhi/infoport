import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'infoport';
  users: User[] = [];
  searchValue = '';
  rating = '';
  constructor(private userService: UserService){}
  ngOnInit(): void {
  this.userService.getUsers().subscribe(us =>{
      this.users = us;
    } );
  }


}
