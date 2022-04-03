export default interface FlashcardInterface {
  readonly id: number
  readonly front?: string
  readonly back?: string
  readonly topic: string
  readonly username: string
}
