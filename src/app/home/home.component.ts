import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: string[] = [];

  constructor(private articleService: ArticleService) {
    console.log(this.articleService.articles);
  }

  ngOnInit() {
    this.articles = this.articleService.articles;
  }

}
