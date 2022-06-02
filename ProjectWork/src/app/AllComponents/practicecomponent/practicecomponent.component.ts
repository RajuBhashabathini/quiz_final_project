import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizserviceService } from 'src/app/AllServices/quizservice.service';

@Component({
  selector: 'app-practicecomponent',
  templateUrl: './practicecomponent.component.html',
  styleUrls: ['./practicecomponent.component.css']
})
export class PracticecomponentComponent implements OnInit {

  isUserAdded: boolean = false;
  userList: any;

  myform: FormGroup = new FormGroup({
    FName: new FormControl('', Validators.required),
    LName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(7)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    Number: new FormControl('', Validators.required)
  });
  

  constructor(
    private signService: QuizserviceService, private myhttp: HttpClient, private formBuilder: FormBuilder,
    private route: ActivatedRoute,  private router: Router ) { }

  ngOnInit(): void {

    this.signService.getProfiles().subscribe((result: any) => {
      this.userList = result;
      console.log(result)
    });
  };
  


  SignUpForm(formRef: any) {
    let data = {
      firstname: formRef.value.FName,
      lastname: formRef.value.LName,
      email: formRef.value.Email,
      password: formRef.value.Password,
      phonenumber: formRef.value.Number
    };

    this.myhttp.post('/api/users/practice', data, { responseType: 'text' }).subscribe(data => {
      console.log(data);
      this.isUserAdded = true;
    });
  };

  
}

