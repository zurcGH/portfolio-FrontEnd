import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditStudyComponent } from './components/studies/edit-study.component';
import { NewStudyComponent } from './components/studies/new-study.component';
import { EditWorkExpComponent } from './components/workexp/edit-work-exp.component';
import { NewWorkExpComponent } from './components/workexp/new-work-exp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newWorkExp', component: NewWorkExpComponent},
  {path: 'editWorkExp/:id', component: EditWorkExpComponent},
  {path: 'newStudy', component: NewStudyComponent},
  {path: 'editStudy/:id', component: EditStudyComponent},
  {path: 'newSkill', component: NewSkillComponent},
  {path: 'editSkill/:id', component: EditSkillComponent},
  {path: 'editAbout/:id', component: EditAboutComponent},
  {path: 'newProject', component: NewProjectComponent},
  {path: 'editProject/:id', component: EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
