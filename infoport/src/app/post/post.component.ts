import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() user: User = {
    id: 0,
    name: '',
    location: '',
    designation: '',
    avatar: '',
    message: '',
    lorem: '',
    rating: 0,
    audio: '',
  };
  rating = 0;
  colorRating = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.user.rating > 4.5) {
      this.colorRating = '#3f51b5';
    } else {
      this.colorRating = '#f44336';
    }
  }
  userSelected() {
    this.router.navigate(['details', this.user.id]);
  }

}
