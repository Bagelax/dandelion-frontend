import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../services/request.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DetectedLang } from "../../models/language-detection";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {
  public form: FormGroup;
  public detectedLangs: Array<DetectedLang>;

  constructor(private requestService: RequestService, private formBuilder: FormBuilder) {
    this.detectedLangs = new Array<DetectedLang>();
    this.form = this.formBuilder.group({
      text: ['', Validators.required],
      clean: [false]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    let text = this.form.get('text')?.value;
    let clean = this.form.get('clean')?.value;
    this.requestService.languageDetection(text, clean).subscribe(ld => {
      console.log(ld);
      this.detectedLangs = ld.detectedLangs;
    });
  }

}
