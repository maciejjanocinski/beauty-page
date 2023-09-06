import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  formData = {
    email: '',
    message: ''
  };
  formErrors: any = {};

  okMessageVisible = false;
  errorMessageVisible = false;

  constructor(private http: HttpClient) {}

  async submitForm() {
    try {
      const response = await this.http.post('https://formspree.io/f/meqbkrkp', this.formData).toPromise();
      this.okMessageVisible = true;
      this.errorMessageVisible = false;
    } catch (error) {
      this.okMessageVisible = false;
      this.errorMessageVisible = true;
    }
  }

}
