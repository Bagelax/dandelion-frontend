export interface LanguageDetection {
  detectedLangs: Array<DetectedLang>
}

export interface DetectedLang {
  lang: string,
  confidence: number
}
