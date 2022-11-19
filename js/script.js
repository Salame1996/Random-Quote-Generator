/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/



let quotes = [
  {
    quote: " No matter where life takes me, find me with a smile.",
    source: "Mac Miller",
    citation: "Best Day Ever",
    year: "2011",
    genre: "Rap"
  },
  {
    quote: "Live your life, live it right. Be different, do different things.",
    source: "Kendrick Lamar",
    citation: "Kush & Corinthians (His Pain)",
    year: "2011",
    genre: "Rap"
  },
  {
    quote: "When everybody goes left, I'm gonna go right most of the time.",
    source: "Freddie Gibbs",
    citation: "Gold Rings",
    year: "2022",
    genre: "Rap"
  },
  {
    quote: " The world is neither fair nor unfair ",
    source: "The Cure",
    citation: "Where the Birds Always Sing",
    year: "2000",
    genre: "Alternative"
  },
  {
    quote:
      "Most people gaze neither into the past nor the future; they explore neither truth nor lies. They gaze at the television.",
    source: "RadioHead",
    citation: "OK Computer",
    year: "1997",
    genre: "Alternative/Rock"
  },
];

//Random color function
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

return bgColor
 
  }

/***
 * `getRandomQuote` function
 ***/
function getRandomQuotes() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  return random;
}
console.log(getRandomQuotes());

/***
 * `printQuote` function
 ***/
function printQuote() {
  let randomQuote = getRandomQuotes();
  let bgColor = random_bg_color();
  let result = `
  <p class ="quote"> ${randomQuote.quote} </p>
<p class ="source"> ${randomQuote.source}`;

document.body.style.background = bgColor;


  if (randomQuote.hasOwnProperty("citation")) {
    result += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.hasOwnProperty("year")) {
    result += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.hasOwnProperty("genre")) {
    result += `<span class="year">${randomQuote.genre}</span>`;
  }
  result += "</p>"
  

  document.getElementById('quote-box').innerHTML = result;
}




setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
