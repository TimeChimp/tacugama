import * as React from "react";
import {
  List,
  arrayMove,
  arrayRemove
} from "baseui/dnd-list";
import { DndListProps } from "./types";

export const DndList = ({ items, setItems }: DndListProps) => {
  return (
    <List
      items={items}
      onChange={({ oldIndex, newIndex }) =>
        setItems(
          newIndex === -1
            ? arrayRemove(items, oldIndex)
            : arrayMove(items, oldIndex, newIndex)
        )
      }
    />
  );
}