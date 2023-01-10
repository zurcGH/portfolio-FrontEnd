import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditWorkExpComponent } from './components/workexp/edit-work-exp.component';
import { NewWorkExpComponent } from './components/workexp/new-work-exp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newWorkExp', component: NewWorkExpComponent},
  {path: 'editWorkExp/:id', component: EditWorkExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
