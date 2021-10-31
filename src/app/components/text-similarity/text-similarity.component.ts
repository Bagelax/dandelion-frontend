import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestService } from "../../services/request.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {
  public form: FormGroup;
  public similarity: number | undefined;

  constructor(private requestService: RequestService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      text1: ['', Validators.required],
      text2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    let text1 = this.form.get('text1')?.value;
    let text2 = this.form.get('text2')?.value;
    this.requestService.textSimilarity(text1, text2).subscribe(ts => {
      this.similarity = ts.similarity;
    });
  }

}
