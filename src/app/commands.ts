type CommandType = Record<
  string,
  {
    name: string;
    link: string;
  }
>;

export const COMMANDS: CommandType = {
  fb: {
    name: "Facebook",
    link: "https://facebook.com",
  },
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
};
