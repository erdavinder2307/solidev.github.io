import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LearnearnComponent } from './learnearn/learnearn.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [  { path: '', redirectTo: 'index', pathMatch: 'full' },
{ path: 'index', component: IndexComponent, data: {animation: 'HomePage'} },
{ path: 'login', component: LoginComponent, data: {animation: 'FilterPage'} },
{ path: 'about', component: AboutComponent , data: {animation: 'AboutPage'}},
{ path: 'service', component: ServicesComponent , data: {animation: 'FilterPage'}},
{ path: 'clients', component: TestimonialsComponent , data: {animation: 'AboutPage'}},
{ path: 'learn', component: LearnearnComponent , data: {animation: 'FilterPage'}},
{ path: 'contact', component: ContactComponent , data: {animation: 'AboutPage'}},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload',useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
