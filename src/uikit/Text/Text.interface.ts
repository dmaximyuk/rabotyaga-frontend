type TextMode =
  | "title"
  | "title-bold"
  | "text"
  | "text-bold"
  | "description"
  | "description-bold";

export interface TextProps {
  path: string;
  mode: TextMode;
}
