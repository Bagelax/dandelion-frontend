import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  }

  getToken() {
    return this.config.token;
  }

  tokenNotEmpty() {
    return this.config.token !== "";
  }
}
