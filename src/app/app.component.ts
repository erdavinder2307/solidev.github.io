import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Solidev Electrosoft Pvt Ltd';
  constructor(private meta: Meta)
  {
    meta.addTag({name: 'description', content: 'Web application, Desktop Applications, Mobile Applications'});
    meta.addTag({name: 'author', content: 'Davinder Pal, CEO'}); 
    meta.addTag({name: 'keywords', content: 'TypeScript, Angular, Web Applications, Mobile applications, IOS apps, Android apps, Asp.net Core, Asp.net MVC, MS SQL, Unity 3d, Windows Server'});

  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
