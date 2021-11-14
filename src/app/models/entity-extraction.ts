export interface EntityExtraction {
  annotations: Array<Entity>
}

export interface Entity {
  label: string,
  image?: Image,
  abstract?: string,
  categories?: Array<string>
}

export interface Image {
  thumbnail: string
}
