import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  result: any;

  constructor(
    private http: HttpClient) { }



  sendEmail (contactForm): Observable<any> {
    return this.http.get<any>('https://api.solidevelectrosoft.com/api/Common/SendContactEmail?name='+contactForm.value.name+'&email='+contactForm.value.email+'&subject='+contactForm.value.subject+'&message='+contactForm.value.message)
      .pipe(
        //catchError(this.handleError('getHeroes', []))
      );
  }
}

