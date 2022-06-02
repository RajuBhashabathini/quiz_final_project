import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuizserviceService } from 'src/app/AllServices/quizservice.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-dockerquiz',
  templateUrl: './dockerquiz.component.html',
  styleUrls: ['./dockerquiz.component.css']
})
export class DockerquizComponent implements OnInit {

  
  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public name = "";
  QuestionList: any = [];
  public points: number = 0;
  public timer: number = 30;
  public totaltimer: number = 600;
  interval: any;
  public questionnumber: number = 0;
  public correctAnswers: number = 0;
  public wrongAnswers: number = 0;
  public session: any="";

  constructor(private call: QuizserviceService) { }

  ngOnInit(): void {

    this.session = sessionStorage.getItem("name");


    this.startTimer();
    this.startTotalTimer();   

    this.call.getDockerQuestions().subscribe((res) => {
      this.QuestionList = res;
      console.log("can u see me");
      console.log(res);
    });
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.isCameraExist = mediaDevices && mediaDevices.length > 0;
    });

  }

  
  takeSnapshot(): void {
    this.trigger.next();
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }


  nextquestion() {
    this.questionnumber++;
    this.timer = 30;
  }

  answer(currentQno: number, option: any) {
    if (option.correct) {
      this.points = this.points + 10;
      this.correctAnswers++;
      this.questionnumber++;
      this.timer = 30;
    }
    else {
      this.points = this.points - 2.5;
      this.questionnumber++;
      this.wrongAnswers++;
      this.timer = 30;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      }
      else {
        this.questionnumber++;
        this.timer = 30;
      }
    }, 1000)
  };

  startTotalTimer() {
    this.interval = setInterval(() => {
      if (this.totaltimer > 0) {
        this.totaltimer--;
      }
      else {
        this.questionnumber = 9;
      }
    }, 1000)
  }
}
