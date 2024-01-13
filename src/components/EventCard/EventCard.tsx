import "./EventCard.sass";

import { type FC, useMemo } from "react";
import { formatDate } from "utils";

import { Container, Card, Text, Line } from "uikit";

import type { EventCardProps } from "./EventCard.interface";

import { IconX } from "@tabler/icons-react";

export const EventCard: FC<EventCardProps> = (props) => {
  const isAdmin: boolean = true;
  const type = useMemo(() => `events.cards.type.${props.event.type}`, [props]);

  return (
    <Container>
      <Card className="EventCard__card">
        <Line alignItems="center" justifyContent="space-between">
          <Line gap="var(--padding-small)">
            <Text text={type} tag="span" isTransparent />
            <Text text="·" tag="span" isBold isTransparent />
            {props.event.createdAt && (
              <Text
                text={formatDate(props.event.createdAt / 1000)}
                tag="span"
                isTransparent
              />
            )}
          </Line>
          {isAdmin && (
            <div>
              <IconX height={14} width={14} />
            </div>
          )}
        </Line>
        <Text text={props.event.text} tag="p" />
      </Card>
    </Container>
  );
};
