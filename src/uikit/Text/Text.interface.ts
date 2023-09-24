type TextMode =
  | "title"
  | "title-bold"
  | "text"
  | "text-bold"
  | "text-bold-transparent"
  | "description"
  | "description-bold";

export interface TextProps {
  text: string;
  mode: TextMode;
}
