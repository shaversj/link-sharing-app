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
  { id: 1, name: "GitHub", backgroundColor: "1a1a1a", imageLocation: "/icon-github.svg" },
  { id: 2, name: "Twitter", backgroundColor: "43b7e9", imageLocation: "icon-twitter.svg" },
  { id: 3, name: "LinkedIn", backgroundColor: "2d68ff", imageLocation: "icon-linkedin.svg" },
  { id: 4, name: "Codepen", backgroundColor: "black", imageLocation: "icon-codepen.svg" },
  { id: 5, name: "Codewars", backgroundColor: "8a1a50", imageLocation: "icon-codewars.svg" },
  { id: 6, name: "Dev.to", backgroundColor: "333333", imageLocation: "icon-devto.svg" },
  { id: 7, name: "Email", backgroundColor: "black", imageLocation: "icon-email.svg" },
  { id: 8, name: "Facebook", backgroundColor: "2442ac", imageLocation: "icon-facebook.svg" },
  { id: 9, name: "FreeCodeCamp", backgroundColor: "302267", imageLocation: "icon-freecodecamp.svg" },
  { id: 10, name: "Frontend Mentor", backgroundColor: "ffffff", imageLocation: "icon-frontend-mentor.svg" },
  { id: 11, name: "GitLab", backgroundColor: "eb4a25", imageLocation: "icon-gitlab.svg" },
  { id: 12, name: "Hashnode", backgroundColor: "0330d1", imageLocation: "icon-hashnode.svg" },
  { id: 13, name: "Twitch", backgroundColor: "ed3fc8", imageLocation: "icon-twitch.svg" },
  { id: 14, name: "YouTube", backgroundColor: "ee3939", imageLocation: "icon-youtube.svg" },
];
