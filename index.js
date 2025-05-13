import {
  init,
  AuthType,
  ConversationEmbed,
} from "https://unpkg.com/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js";

// Declare the ThoughtSpot URL to connect to.
const tsUrl = "https://embed-1-do-not-delete.thoughtspotstaging.cloud";

// Render the nav bar and initial content
const app = document.getElementById("app");

// Ask Sharky function
function askSharky() {
  // app.innerHTML = `<p>Add embedding code here.</p>`;
  const embed = new ConversationEmbed("#app", {
    worksheetId: "072a23ed-0f40-4d31-84bb-f9cd6acf6c49",
    searchOptions: {
      searchQuery: "what are my top selling items by region",
    },
    disableSourceSelection: true,
  });

  embed.render();
}

// Initialize the embed
init({
  thoughtSpotHost: tsUrl,
  authType: AuthType.None,
  customizations: {
    style: {
      customCSSUrl: "https://cdn.jsdelivr.net/gh/billdback-ts/sharky/ts001.css", // location of your style sheet
      // To apply overrides for your style sheet in this init, provide variable values below, eg
      customCSS: {
        variables: {
        },
      },
    },
    iconSpriteUrl: "https://cdn.jsdelivr.net/gh/billdback-ts/sharky/shark.svg",
    content: {
      strings: {
        Spotter: "Sharky"
      }
    }
  },
});

// Run askSharky on page load
askSharky();

document.getElementById("ask-sharky-link").addEventListener("click", (e) => {
  e.preventDefault();
  askSharky();
});
