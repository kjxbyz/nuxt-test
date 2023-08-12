export interface NTTranslationStatus {
  total: number
  locales: Record<string, {
    percentage: string
    total: number
  }>
}
