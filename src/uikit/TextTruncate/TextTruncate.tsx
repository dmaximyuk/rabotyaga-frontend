import "./TextTruncate.sass";

import { type FC, useState } from "react";

import type { TextTruncateProps } from "./TextTruncate.interface";

export const TextTruncate: FC<TextTruncateProps> = ({ text, linesToShow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowButton = text.split(" ").length > linesToShow;

  const truncatedText = text.split(" ").slice(0, linesToShow).join(" ");
  const displayText = isExpanded
    ? text
    : truncatedText + (shouldShowButton ? "..." : "");

  return (
    <div>
      <p>{displayText}</p>
      {shouldShowButton && (
        <button onClick={toggleExpand}>
          {isExpanded ? "Свернуть" : "Показать еще"}
        </button>
      )}
    </div>
  );
};
