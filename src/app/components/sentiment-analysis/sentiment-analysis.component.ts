import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestService } from "../../services/request.service";
import { Sentiment } from "../../models/sentiment-analysis";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {
  form: FormGroup;
  sentiment: Sentiment | undefined;

  constructor(private requestService: RequestService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      text: ['', Validators.required],
      lang: [null]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    let text = this.form.get('text')?.value;
    let lang = this.form.get('lang')?.value;
    this.requestService.sentimentAnalysis(text, lang).subscribe(sa => {
      this.sentiment = sa.sentiment;
    });
  }

  getBgColor(): object {
    if (this.sentiment === undefined) return {};
    let val = (this.sentiment.score + 1) / 2;
    return {
      backgroundColor: `rgb(${255 * (1 - val)}, ${255 * val}, 0)`
    };
  }
}
