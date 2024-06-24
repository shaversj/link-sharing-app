"use client";

import { useReducer } from "react";

export type LinkProps = {
  id: string | null;
  userid: string;
  name: string;
  url: string;
};

export default function useLinkReducer({ initialLinks }: { initialLinks: LinkProps[] }) {
  // const session = await auth();
  // const [state, setState] = useState(initialLinks);

  const reducer = (state: LinkProps[], action: { type: string; payload: LinkProps }) => {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "remove":
        fetch(`/api/user/link?userId=${action.payload.userid}`, {
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
        const userid = state ? state[0].userid : "";
        fetch(`/api/user/link?userId=${userid}`, {
          method: "POST",
          body: JSON.stringify({ links: state }),
        });
        return state;
      default:
        return state;
    }
  };

  const [links, dispatch] = useReducer(reducer, initialLinks);
  return { links, dispatch };
}
