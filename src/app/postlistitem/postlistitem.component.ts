import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {

  /* un seul attribut : un post*/
  @Input() post:Post;

  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.post.incLike();
  }

  onDislike(){
    this.post.decLike();
  }

}
