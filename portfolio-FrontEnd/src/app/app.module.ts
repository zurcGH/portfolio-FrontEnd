import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WorkexpComponent } from './components/workexp/workexp.component';
import { StudiesComponent } from './components/studies/studies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { interceptorProvider } from './service/interceptor-service';
import { NewWorkExpComponent } from './components/workexp/new-work-exp.component';
import { EditWorkExpComponent } from './components/workexp/edit-work-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkexpComponent,
    StudiesComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewWorkExpComponent,
    EditWorkExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
