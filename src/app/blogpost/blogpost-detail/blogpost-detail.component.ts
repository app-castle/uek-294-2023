import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-blogpost-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css'],
})
export class BlogpostDetailComponent {
  public blogpost: Blogpost | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => (this.blogpost = data['blogpost']));
  }
}
