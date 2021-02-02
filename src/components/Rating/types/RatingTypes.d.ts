export type RatingVariant = "star" | "emoji";
export type RatingSize = "small" | "medium" | "large";
export interface EmojiScale {
  [index: number]: { emoji: string; value: number };
}
