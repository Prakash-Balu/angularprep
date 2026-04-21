import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../store/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com';

  getPosts(limit = 10): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts?_limit=${limit}`);
  }
}
