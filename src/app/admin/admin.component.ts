import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form: FormGroup;
  config = {
    height: '50%',
    uploadImagePath: 'http://localhost:8080/api/image'
  };
  constructor() {
    this.form = new FormGroup({
      html: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  log() {
    console.log(this.form.get('html').value);
  }
}
