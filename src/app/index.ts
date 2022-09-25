import { COMMANDS } from "./commands.js";
// import $ from "jquery";

function AddShortcutsToTable() {
  Object.keys(COMMANDS).map((shortcut) => {
    $("#help-table").append(`
        <tr>
            <td>${shortcut}</td>
            <td>${COMMANDS[shortcut].name}</td>
            <td>${COMMANDS[shortcut].link}</td>
        </tr>
    `);
  });
}

AddShortcutsToTable();
