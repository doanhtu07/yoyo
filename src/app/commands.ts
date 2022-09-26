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
  help: {
    name: "Yoyo Guide",
    link: "https://yoyo-shortcut.herokuapp.com/",
  },

  fb: {
    name: "Facebook",
    link: "https://facebook.com",
  },
  facebook: "fb",

  cal: {
    name: "Calendar",
    link: "https://calendar.google.com/calendar/u/0/r?tab=oc",
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

  outl: {
    name: "Outlook",
    link: "ms-outlook://",
  },
  outlook: "outl",

  notion: {
    name: "Notion",
    link: "notion://",
  },

  disc: {
    name: "Discord",
    link: "discord://",
  },
  discord: "disc",
};
