import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() userSelected = new EventEmitter<User>();
  rating = 0;
  colorRating = '';
  constructor() { }

  ngOnInit(): void {
    if (this.user.rating > 4.5) {
      this.colorRating = '#3f51b5';
    } else {
      this.colorRating = '#f44336';
    }
  }
  editUser(): void {
    this.userSelected.emit(this.user);
  }

}
