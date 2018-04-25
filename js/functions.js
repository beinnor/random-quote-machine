const quoteBtn = document.getElementById("quoteBtn");
const tweetBtn = document.getElementById("tweetBtn");
const outputContainer = document.getElementById("output");

function writeQuotes(quote, author) {
  let htmlString = `<p> ${quote}</p><p>${author}</p>`;
  outputContainer.innerHTML = htmlString;

}

quoteBtn.addEventListener("click", function () {
  getRandomQuoteFromJSON("js/quotes.json");
});

tweetBtn.addEventListener("click", function () {
  alert(`tweet: ${outputContainer.innerText}`);
});

function getRandomQuoteFromJSON(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    let quotes = JSON.parse(request.responseText);
    let randomNum = Math.floor((Math.random() * quotes.length));
    writeQuotes(quotes[randomNum].quote, quotes[randomNum].author);
  };
  request.send();
}


