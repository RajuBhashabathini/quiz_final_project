import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headertwo',
  templateUrl: './headertwo.component.html',
  styleUrls: ['./headertwo.component.css']
})
export class HeadertwoComponent implements OnInit {
  public session: any = "";

  constructor() { }

  ngOnInit(): void {
    this.session = sessionStorage.getItem("name");
  }

}
