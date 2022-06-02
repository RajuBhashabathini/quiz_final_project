import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';


import { AppComponent } from './app.component';
import { HeaderComponent } from './AllComponents/header/header.component';
import { FooterComponent } from './AllComponents/footer/footer.component';
import { MainContainerComponent } from './AllComponents/main-container/main-container.component';
import { ErrorComponent } from './AllComponents/error/error.component';
import { WelcomeComponent } from './AllComponents/welcome/welcome.component';
import { StartquizComponent } from './AllComponents/startquiz/startquiz.component';
import { PracticecomponentComponent } from './AllComponents/practicecomponent/practicecomponent.component';
import { SidebarComponent } from './AllComponents/sidebar/sidebar.component';
import { HeadertwoComponent } from './AllComponents/headertwo/headertwo.component';
import { AngularQuizComponent } from './AllComponents/angular-quiz/angular-quiz.component';
import { AwsquizComponent } from './AllComponents/awsquiz/awsquiz.component';
import { GitquizComponent } from './AllComponents/gitquiz/gitquiz.component';
import { DockerquizComponent } from './AllComponents/dockerquiz/dockerquiz.component';
import { NodequizComponent } from './AllComponents/nodequiz/nodequiz.component';
import { HtmlquizComponent } from './AllComponents/htmlquiz/htmlquiz.component';
import { CssquizComponent } from './AllComponents/cssquiz/cssquiz.component';
import { LoginComponent } from './AllComponents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ErrorComponent,
    WelcomeComponent,
    StartquizComponent,
    PracticecomponentComponent,
    SidebarComponent,
    HeadertwoComponent,
    AngularQuizComponent,
    AwsquizComponent,
    GitquizComponent,
    DockerquizComponent,
    NodequizComponent,
    HtmlquizComponent,
    CssquizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
