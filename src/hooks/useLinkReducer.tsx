"use client";

import { useReducer } from "react";

export type LinkProps = {
  id: string | null;
  userId: string;
  name: string;
  url: string;
};

export type Action =
  | { type: "add"; payload: LinkProps }
  | { type: "remove"; payload: LinkProps }
  | { type: "update"; payload: LinkProps }
  | { type: "save"; payload: LinkProps[] }
  | { type: "move"; payload: { fromIndex: number; toIndex: number } };

export default function useLinkReducer({ initialLinks }: { initialLinks: LinkProps[] }) {
  const reducer = (state: LinkProps[], action: Action) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "remove":
        fetch(`/api/user/link?userId=${action.payload.userId}`, {
          method: "DELETE",
          body: JSON.stringify({ id: action.payload.id }),
        });
        return state.filter((link) => link.id !== action.payload.id);
      case "update":
        return state.map((link) => {
          if (link.id === action.payload.id) {
            return action.payload;
          }
          return link;
        });
      case "save":
        fetch(`/api/user/links`, {
          method: "POST",
          body: JSON.stringify({ userId: state[0].userId, links: action.payload }),
        });
        state = action.payload;
        return state;
      case "move":
        const { fromIndex, toIndex } = action.payload;
        const updatedLinks = [...state];
        const [movedLink] = updatedLinks.splice(fromIndex, 1);
        updatedLinks.splice(toIndex, 0, movedLink);
        return updatedLinks;
      default:
        return state;
    }
  };

  const [links, dispatch] = useReducer(reducer, initialLinks);
  return { links, dispatch };
}
