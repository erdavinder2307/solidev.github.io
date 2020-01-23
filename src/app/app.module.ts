import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule,MatToolbarModule,MatButtonModule,
  MatSidenavModule,MatMenuModule,MatCardModule,MatListModule,
   MatFormFieldModule,
   MatInputModule,} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import{FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LearnearnComponent } from './learnearn/learnearn.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { rootRouterConfig } from './app.routes';
import { environment } from 'src/environments/environment';
import { OurdevelopersComponent } from './ourdevelopers/ourdevelopers.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    CarouselPauseComponent,
    ServicesComponent,
    TestimonialsComponent,
    LearnearnComponent,
    ContactComponent,
    OurdevelopersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
