import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ConfigService } from "./config.service";
import { EntityExtraction } from "../models/entity-extraction";
import { LanguageDetection } from "../models/language-detection";
import { TextSimilarity } from "../models/text-similarity";
import { SentimentAnalysis } from "../models/sentiment-analysis";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private readonly apiUrl: string;

  constructor(private configService: ConfigService, private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  entityExtraction(text: string, min_confidence: Number, include: string): Observable<EntityExtraction> {
    let token = this.configService.token;
    let url = `${this.apiUrl}/datatxt/nex/v1?token=${token}&text=${text}&min_confidence=${min_confidence}`;
    if (include !== "") {
      url = `${url}&include=${include}`;
    }
    this.logRequest(url);
    return this.httpClient.get<EntityExtraction>(url);
  }

  languageDetection(text: string, clean: boolean): Observable<LanguageDetection> {
    let token = this.configService.token;
    let url = `${this.apiUrl}/datatxt/li/v1?token=${token}&text=${text}`;
    if (clean) {
      url = `${url}&clean=true`;
    }
    this.logRequest(url);
    return this.httpClient.get<LanguageDetection>(url);
  }

  textSimilarity(text1: string, text2: string): Observable<TextSimilarity> {
    let token = this.configService.token;
    let url = `${this.apiUrl}/datatxt/sim/v1?token=${token}&text1=${text1}&text2=${text2}`;
    this.logRequest(url);
    return this.httpClient.get<TextSimilarity>(url);
  }

  sentimentAnalysis(text: string, lang?: string): Observable<SentimentAnalysis> {
    let token = this.configService.token;
    let url = `${this.apiUrl}/datatxt/sent/v1?token=${token}&text=${text}`;
    if (lang !== null)
      url = `${url}&lang=${lang}`;
    this.logRequest(url);
    return this.httpClient.get<SentimentAnalysis>(url);
  }

  logRequest(request: string): void {
    let d = new Date(Date.now());
    let time = `[${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}]`
    this.configService.history.push(`${time} GET ${request}`);
  }
}
