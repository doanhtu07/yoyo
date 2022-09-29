type CommandType = Record<string, InfoPack | string>;

export type InfoPack = {
  name: string;
  link: string;
};

export const alternativesMap = (): Record<string, string[]> => {
  const map: Record<string, string[]> = {};

  Object.keys(COMMANDS).forEach((key) => {
    const val = COMMANDS[key];
    if (typeof val === "string") {
      if (!map[val]) {
        map[val] = [key];
      } else {
        map[val].push(key);
      }
    }
  });

  return map;
};

/*
  List all URIs on Mac:
    /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -dump URLSchemeBinding
 */

export const COMMANDS: CommandType = {
  h: {
    name: "Yoyo Guide",
    link: "https://yoyo-shortcut.herokuapp.com/",
  },
  help: "h",

  fb: {
    name: "Facebook",
    link: "https://facebook.com",
  },
  facebook: "fb",

  gm: {
    name: "Gmail",
    link: "https://mail.google.com",
  },
  cal: {
    name: "Calendar",
    link: "https://calendar.google.com/calendar/u/0/r?tab=oc",
  },
  dr: {
    name: "Google Drive",
    link: "https://drive.google.com/",
  },
  el: {
    name: "Elearning",
    link: "http://elearning.utdallas.edu/",
  },
  git: {
    name: "doanhtu07's Github",
    link: "https://github.com/doanhtu07",
  },
  mess: {
    name: "Messenger",
    link: "messenger://",
  },
  vs: {
    name: "VS Code",
    link: "vscode://",
  },

  out: {
    name: "Outlook",
    link: "ms-outlook://",
  },
  outlook: "out",

  no: {
    name: "Notion",
    link: "notion://",
  },
  notion: "no",

  dis: {
    name: "Discord",
    link: "discord://",
  },
  discord: "dis",

  li: {
    name: "doanhtu07's LinkedIn",
    link: "https://www.linkedin.com/in/anh-tu-do-77458820a/",
  },
  linkedin: "li",

  g: {
    name: "Google",
    link: "https://www.google.com",
  },

  le: {
    name: "Leetcode",
    link: "https://www.leetcode.com",
  },
  leet: "le",

  aws: {
    name: "Amazon",
    link: "https://www.amazon.com/",
  },

  fig: {
    name: "Figma",
    link: "https://www.figma.com",
  },
  figma: "fig",

  notes: {
    name: "Apple Notes",
    link: "notes://",
  },

  gr: {
    name: "GroupMe",
    link: "https://groupme.com/",
  },

  ore: {
    name: "O'reilly",
    link: "https://learning.oreilly.com/home/",
  },

  rep: {
    name: "Replit",
    link: "https://replit.com/~",
  },

  hs: {
    name: "Handshake UTD",
    link: "https://utdallas.joinhandshake.com/",
  },
};
