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
    height: '200px',
    uploadImagePath: '/api/upload'
  };
  editorDisabled = false;

  constructor(private sanitizer: DomSanitizer) {
    this.form = new FormGroup({
      html: new FormControl()
    });
  }

  get sanitizedHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.form.get('html').value);
  }

  enableEditor() {
    this.editorDisabled = false;
  }

  disableEditor() {
    this.editorDisabled = true;
  }

  onBlur() {
    console.log('Blur');
  }

  ngOnInit(): void {
  }

  log() {
    console.log(this.form.getRawValue());
  }
}
