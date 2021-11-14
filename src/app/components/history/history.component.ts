import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../services/config.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  getHistory(): Array<string> {
    return this.configService.history;
  }

  ngOnInit(): void {
  }

}
