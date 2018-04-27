"use strict";

const quoteBtn = document.getElementById("quoteBtn");
const tweetBtn = document.getElementById("tweetBtn");
const outputContainer = document.getElementById("output");
let currentQuote = "default";
let currentAuthor = "default";

// run once at start to fill quote before click of button
getRandomQuoteFromLocal();

quoteBtn.addEventListener("click", function () {
  getRandomQuoteFromAPI();
});

tweetBtn.addEventListener("click", function () {
  openTwitterWindow();
});

function writeQuotes(quote, author) {
  let htmlString = `<p> ${quote}</p><p>${author}</p>`;
  outputContainer.innerHTML = htmlString;
}

function getRandomQuoteFromAPI() {
  let xhr = new XMLHttpRequest();
  let link = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) { // if success
        let quotes = JSON.parse(xhr.responseText);
        currentQuote = quotes.quote;
        currentAuthor = quotes.author;
        writeQuotes(currentQuote, currentAuthor);
      } else {
        getRandomQuoteFromLocal(); //otherwise, get local quotes instead
      }
    }
  };

  xhr.open("POST", link);
  xhr.setRequestHeader("X-Mashape-Key", "fHyA6YA1yFmshEdMP5Jq32sFlUemp1hLqtWjsndQ7AtmfwNHBj");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}

function getRandomQuoteFromLocal() {
  let randomNum = Math.floor((Math.random() * quotesArray.length));
  currentQuote = quotesArray[randomNum].quote;
  currentAuthor = quotesArray[randomNum].author;
  writeQuotes(currentQuote, currentAuthor);
}

function openTwitterWindow() {
  const width = 550;
  const height = 420;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  const strWindowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
  window.open(makeTwitterUrl(), "", strWindowFeatures);
}

function makeTwitterUrl() {
  let url = "https://twitter.com/intent/tweet?";
  let hashtags = "quotes,freecodecamp";
  let related = "freecodecamp";
  let text = `"${currentQuote}" - ${currentAuthor}`;
  let twitterUrl = `${url}hashtags=${hashtags}&related=${related}&text=${text}`;
  return twitterUrl;
}
