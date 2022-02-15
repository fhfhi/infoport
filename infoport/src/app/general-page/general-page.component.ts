import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-general-page',
  templateUrl: './general-page.component.html',
  styleUrls: ['./general-page.component.scss']
})
export class GeneralPageComponent implements OnInit {
  title = 'infoport';
  users: User[] = [];
  searchValue = '';
  rating = '';
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(us => {
      this.users = us;
    });
  }
  userSelected(e: User) {
    this.router.navigate(['details', e.id]);
  }

}
