import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestService } from "../../services/request.service";
import { Entity } from "../../models/entity-extraction";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {
  public form: FormGroup;
  public annotations: Entity[];

  constructor(private requestService: RequestService, private formBuilder: FormBuilder) {
    this.annotations = new Array<Entity>();
    this.form = this.formBuilder.group({
      text: ['', Validators.required],
      minConfidence: [0.5, Validators.required],
      includeImage: [false],
      includeAbstract: [false],
      includeCategories: [false]
    });
  }

  getConfidence(): Number {
    return this.form.get('minConfidence')?.value;
  }

  submitForm(): void {
    let text = this.form.get('text')?.value;
    let minConfidence = this.form.get('minConfidence')?.value;

    let include = [];
    if (this.form.get('includeImage')?.value)
      include.push('image');
    if (this.form.get('includeAbstract')?.value)
      include.push('abstract');
    if (this.form.get('includeCategories')?.value)
      include.push('categories');
    let includeStr = include.join(',');
    this.requestService.entityExtraction(text, minConfidence, includeStr).subscribe(ee => {
      this.annotations = ee.annotations;
    })
  }

  ngOnInit(): void {
  }
}
