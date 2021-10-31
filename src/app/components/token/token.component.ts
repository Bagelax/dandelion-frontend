import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from "../../services/config.service";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  token: string;

  constructor(private router: Router, private config: ConfigService) {
    this.token = "";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.config.token = this.token;
    if (this.config.token !== "")
      this.router.navigate(['home']);
  }
}
