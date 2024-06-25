"use client";

import { useReducer } from "react";
export type LinkProps = {
  id: string | null;
  userId: string;
  name: string;
  url: string;
};

export default function useLinkReducer({ initialLinks }: { initialLinks: LinkProps[] }) {
  const reducer = (state: LinkProps[], action: { type: string; payload: LinkProps }) => {
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
        fetch(`/api/user/link`, {
          method: "POST",
          body: JSON.stringify({ links: action.payload }),
        });
        return state;
      default:
        return state;
    }
  };

  const [links, dispatch] = useReducer(reducer, initialLinks);
  return { links, dispatch };
}
