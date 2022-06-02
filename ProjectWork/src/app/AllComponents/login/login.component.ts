import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizserviceService } from 'src/app/AllServices/quizservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;

  userList: any;
  isUserAdded: boolean = false;
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;
  userMessage: string = '';

  constructor(private signService: QuizserviceService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  LoginSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    sessionStorage.setItem("name", this.nameKey.nativeElement.value);
    this.loading = true;
    this.signService.loginUser(this.f['email'].value, this.f['password'].value)
      .subscribe(
        {
          next: (data: any) => {
            this.loading = true;
            if (data.length) {
              this.router.navigate(['/sidebar']);
            } else {
              this.userMessage = 'Login user not found, please enter correct email and password';
            }
          },
          error: (e) => {
            this.loading = false;
            console.error(e)
          }
        });
  }
}
