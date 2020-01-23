import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

declare var require: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  contactForm: FormGroup;
  result: any;
  constructor(
    private fb: FormBuilder,
    private _appService: AppService
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

  sendemail() : void
  {
    this._appService.sendEmail(this.contactForm)
    .subscribe(data => this.result = data);;
  }

}
