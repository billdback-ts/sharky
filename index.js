// 1 - Import the functions and classes from the SDK.
import {
  init,
  AuthType,
  ConversationEmbed,
} from "https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js";

// Declare the ThoughtSpot URL to connect to.
const tsUrl = "https://https://gartner2025.thoughtspotstaging.cloud";

// Render the nav bar and initial content
const app = document.getElementById("app");

// Ask Sharky function
function askSharky() {
  // 3 - Add the embed code from the playground.
  app.innerHTML = `<p>Add embedding code here.</p>`;
}

// 2 - Initialize the embed
// 4 - Add the styles
// init()

// Run askSharky on page load
askSharky();

document.getElementById("ask-sharky-link").addEventListener("click", (e) => {
  e.preventDefault();
  askSharky();
});
