export interface SentimentAnalysis {
  sentiment: Sentiment
}

export interface Sentiment {
  score: number,
  type: string
}
