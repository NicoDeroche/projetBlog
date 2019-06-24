import { Component, Input } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* liste des posts*/
 posts: Array<Post> =
    [
      new Post("mon premier post", "bla bla bla"),
      new Post("mon deuxième post", "et patati et patata"),
      new Post("mon troisième post", "un peu de silence svp !")
    ];


}
