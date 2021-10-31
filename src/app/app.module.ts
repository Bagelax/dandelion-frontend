import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TokenComponent } from './components/token/token.component';
import { AppComponent } from './components/app/app.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    TokenComponent,
    AppComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
