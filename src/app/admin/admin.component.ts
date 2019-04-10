import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form: FormGroup;

  /*  config = {
      height: '50%',
      uploadImagePath: 'http://localhost:8080/api/image'
    };*/
  constructor(private articleService: ArticleService, private router: Router) {
    this.form = new FormGroup({
      html: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.articleService.articles.push(this.form.get('html').value);
    this.router.navigateByUrl('home');
  }
}
