import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Blogpost } from './blogpost';
import { BlogpostService } from './blogpost.service';

@Injectable({
  providedIn: 'root',
})
export class BlogpostResolver implements Resolve<Blogpost> {
  constructor(private blogpostService: BlogpostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Blogpost> {
    const id = route.paramMap.get('id');
    const idAsNumber = Number(id);

    return this.blogpostService.getOnePost(idAsNumber);
  }
}
