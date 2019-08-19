import { Component, OnInit } from '@angular/core';
import { Quote } from '../sema';


@Component({
  selector: 'app-like-sema',
  templateUrl: './like-sema.component.html',
  styleUrls: ['./like-sema.component.css']
})
export class LikeSemaComponent {

  numberOfLikes : number = 0;
  
  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }

}
