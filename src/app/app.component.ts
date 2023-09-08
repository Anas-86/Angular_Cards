import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picutre of snowy mountain'
    },    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'bikin 1234',
      content: 'I did some biking today'
    }
  ]
}
