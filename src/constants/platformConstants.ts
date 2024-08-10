import { Site } from "@/components/SiteLink";

export const platformBackgroundColors: { [index: string]: string } = {
  "1a1a1a": "bg-[#1a1a1a]",
  "43b7e9": "bg-[#43b7e9]",
  "2d68ff": "bg-[#2d68ff]",
  black: "bg-black",
  "8a1a50": "bg-[#8a1a50]",
  "333333": "bg-[#333333]",
  "2442ac": "bg-[#2442ac]",
  "302267": "bg-[#302267]",
  ffffff: "bg-[#ffffff]",
  eb4a25: "bg-[#eb4a25]",
  "0330d1": "bg-[#0330d1]",
  ed3fc8: "bg-[$ed3fc8]",
  ee3939: "bg-[#ee3939]",
};

export const platformSites: Site[] = [
  { id: 1, name: "GitHub", backgroundColor: "bg-[#1a1a1a]", imageLocation: "/images/icon-github.svg" },
  { id: 2, name: "Twitter", backgroundColor: "bg-[#43b7e9]", imageLocation: "/images/icon-twitter.svg" },
  { id: 3, name: "LinkedIn", backgroundColor: "bg-[#2d68ff]", imageLocation: "/images/icon-linkedin.svg" },
  { id: 4, name: "Codepen", backgroundColor: "bg-black", imageLocation: "/images/icon-codepen.svg" },
  { id: 5, name: "Codewars", backgroundColor: "bg-[#8a1a50]", imageLocation: "/images/icon-codewars.svg" },
  { id: 6, name: "Dev.to", backgroundColor: "bg-[#333333]", imageLocation: "/images/icon-devto.svg" },
  { id: 7, name: "Email", backgroundColor: "bg-black", imageLocation: "/images/icon-email.svg" },
  { id: 8, name: "Facebook", backgroundColor: "bg-[#2442ac]", imageLocation: "/images/icon-facebook.svg" },
  { id: 9, name: "FreeCodeCamp", backgroundColor: "bg-[#302267]", imageLocation: "/images/icon-freecodecamp.svg" },
  { id: 10, name: "Frontend Mentor", backgroundColor: "bg-[#ffffff]", imageLocation: "/images/icon-frontend-mentor.svg" },
  { id: 11, name: "GitLab", backgroundColor: "bg-[#eb4a25]", imageLocation: "/images/icon-gitlab.svg" },
  { id: 12, name: "Hashnode", backgroundColor: "bg-[#0330d1]", imageLocation: "/images/icon-hashnode.svg" },
  { id: 13, name: "Twitch", backgroundColor: "bg-[#ed3fc8]", imageLocation: "/images/icon-twitch.svg" },
  { id: 14, name: "YouTube", backgroundColor: "bg-[#ee3939]", imageLocation: "/images/icon-youtube.svg" },
];
