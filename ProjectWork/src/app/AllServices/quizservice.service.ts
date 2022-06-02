import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {
  
  constructor(private https: HttpClient) { }

  getAllQuestions() {
    return this.https.get('assets/jsonfiles/AllTopics.json')    
  };
  getHTMLQuestions() {
    return this.https.get('assets/jsonfiles/HtmlQuestions.json')    
  };
  getAngularQuestions() {
    return this.https.get('assets/jsonfiles/AngularQuestions.json')    
  };
  getAWSQuestions() {
    return this.https.get('assets/jsonfiles/AWSQuestions.json')    
  };
  getCssQuestions() {
    return this.https.get('assets/jsonfiles/CssQuestions.json')    
  };
  getDockerQuestions() {
    return this.https.get('assets/jsonfiles/DockerQuestions.json')    
  };
  getGITQuestions() {
    return this.https.get('assets/jsonfiles/GitQuestions.json')    
  };
  getNodeQuestions() {
    return this.https.get('assets/jsonfiles/NodeQuestions.json')    
  };

  getProfiles(){
    return this.https.get('http://localhost:4200/api/users')
  }

  loginUser(email: string, password: string) {
    //rest api call to express
    let loginData = {
      email: email,
      password: password
    };
  
    return this.https.post('api/users/login', loginData);
  }

}
