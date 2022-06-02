import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularQuizComponent } from './AllComponents/angular-quiz/angular-quiz.component';
import { AwsquizComponent } from './AllComponents/awsquiz/awsquiz.component';
import { CssquizComponent } from './AllComponents/cssquiz/cssquiz.component';
import { DockerquizComponent } from './AllComponents/dockerquiz/dockerquiz.component';
import { ErrorComponent } from './AllComponents/error/error.component';
import { GitquizComponent } from './AllComponents/gitquiz/gitquiz.component';
import { HtmlquizComponent } from './AllComponents/htmlquiz/htmlquiz.component';
import { LoginComponent } from './AllComponents/login/login.component';
import { NodequizComponent } from './AllComponents/nodequiz/nodequiz.component';
import { PracticecomponentComponent } from './AllComponents/practicecomponent/practicecomponent.component';
import { SidebarComponent } from './AllComponents/sidebar/sidebar.component';
import { StartquizComponent } from './AllComponents/startquiz/startquiz.component';
import { WelcomeComponent } from './AllComponents/welcome/welcome.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},

  {path:'startquiz', component:StartquizComponent},
  {path:'gitquiz', component:GitquizComponent},
  {path:'htmlquiz', component:HtmlquizComponent},
  {path:'cssquiz', component:CssquizComponent},
  {path:'angularquiz', component:AngularQuizComponent},
  {path:'nodequiz', component:NodequizComponent},
  {path:'awsquiz', component:AwsquizComponent},
  {path:'dockerquiz', component:DockerquizComponent},

  {path:'welcome', component:WelcomeComponent},
  {path:'practice', component:PracticecomponentComponent},
  {path:'login', component:LoginComponent},

  {path:'sidebar', component:SidebarComponent},
  {path:'**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
