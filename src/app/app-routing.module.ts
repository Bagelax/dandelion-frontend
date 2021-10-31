import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from "./components/token/token.component";
import { TokenGuard } from "./token.guard";
import { EntityExtractionComponent } from "./components/entity-extraction/entity-extraction.component";
import { LanguageDetectionComponent } from "./components/language-detection/language-detection.component";
import { SentimentAnalysisComponent } from "./components/sentiment-analysis/sentiment-analysis.component";
import { TextSimilarityComponent } from "./components/text-similarity/text-similarity.component";
import { HistoryComponent } from "./components/history/history.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/token',
    pathMatch: 'full'
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "token",
    component: TokenComponent,
    canDeactivate: [TokenGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canDeactivate: [TokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
