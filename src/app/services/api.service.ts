import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base = 'https://jsonplaceholder.typicode.com';

  http = inject(HttpClient);
  
  getUsers(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/users`);
  }

  getPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/posts?userId=${userId}`);
  }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/comments?postId=${postId}`);
  }

  saveData(data: any) : Observable<any> {
    return this.http.post(`${this.base}/posts`, data);
  }
}
