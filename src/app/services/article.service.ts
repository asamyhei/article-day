import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: string[] = [];

  constructor() {
  }
}
