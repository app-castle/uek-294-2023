import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Blogpost } from '../blogpost/blogpost';
import { BlogpostService } from '../blogpost/blogpost.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public blogposts: Blogpost[] | undefined;

  constructor(private blogpostService: BlogpostService) {}

  public ngOnInit() {
    const request = this.blogpostService.getPosts();
    request.subscribe((result) => {
      this.blogposts = result;
    });
  }
}
