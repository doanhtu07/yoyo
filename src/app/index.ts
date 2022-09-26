import { alternativesMap, COMMANDS } from "./commands.js";
// import $ from "jquery";

function AddShortcutsToTable() {
  const map = alternativesMap();

  Object.keys(COMMANDS).map((shortcut) => {
    const pack = COMMANDS[shortcut];

    if (typeof pack === "string") {
      return;
    }

    let allShortcuts = shortcut;
    if (map[shortcut] !== undefined) {
      const alternatives = map[shortcut];
      alternatives.forEach((name) => {
        allShortcuts += `, ${name}`;
      });
    }

    console.log(map, allShortcuts);

    $("#help-table").append(`
        <tr>
            <td>${allShortcuts}</td>
            <td>${pack.name}</td>
            <td>${pack.link}</td>
        </tr>
    `);
  });
}

AddShortcutsToTable();
