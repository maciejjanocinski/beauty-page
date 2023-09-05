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
      console.log('Wiadomość została wysłana', response);
      this.okMessageVisible = true;
      this.errorMessageVisible = false; // Upewnij się, że jest wyłączony
    } catch (error) {
      console.error('Błąd podczas wysyłania wiadomości', error);
      this.okMessageVisible = false; // Upewnij się, że jest wyłączony
      this.errorMessageVisible = true;
    }
  }

}
