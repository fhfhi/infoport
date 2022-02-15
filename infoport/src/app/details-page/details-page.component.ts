import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { single } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  id = 0;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  user: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      if(p.has('id')){
        this.id = Number(p.get('id'));
        this.userService.getUsers().subscribe(us => {
          this.user = us.find(u => u.id === this.id)
        });
      }
    });
  }
  goBack(){
    this.router.navigate(['']);
  }


}
