import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  /* la liste des posts est une propriete passee en parametre */
  @Input() posts:Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
