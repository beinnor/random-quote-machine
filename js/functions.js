$(document).ready(function () {

  // array of quote objects, used as fallback in case API fails
  let fallbackQuotes = [
    {
      "quote": "A banker is a fellow who lends you his umbrella when the sun is shining and wants it back the minute it begins to rain.",
      "author": "Mark Twain"
    },
    {
      "quote": "A horse!  A horse!  My kingdom for a horse!",
      "author": "Wm. Shakespeare, \"Richard III\""
    },
    {
      "quote": "A kind of Batman of contemporary letters.",
      "author": "Philip Larkin on Anthony Burgess"
    },
    {
      "quote": "Big book, big bore.",
      "author": "Callimachus"
    },
    {
      "quote": "Seeing that death, a necessary end, Will come when it will come.",
      "author": "William Shakespeare, \"Julius Caesar\""
    },
    {
      "quote": "Something's rotten in the state of Denmark.",
      "author": "Shakespeare"
    },
    {
      "quote": "Sometimes I wonder if I'm in my right mind.  Then it passes off and I'm as intelligent as ever.",
      "author": "Samuel Beckett, \"Endgame\""
    }
  ];

  // use this is api fails
  function getQuoteFromFallback() {
    let randomNum = Math.floor((Math.random() * fallbackQuotes.length));
    let quote = fallbackQuotes[randomNum];
    writeQuotes(quote.quote, quote.author);
  }


  function getQuoteFromApi() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      type: "get",
      dataType: "jsonp",
      success: function (data) {
        writeQuotes(data.quoteText, data.quoteAuthor);
      },
      error: function () {
        getQuoteFromFallback();
      }
    });

  }

  function writeQuotes(quote, author) {
    $("#output").html("<p>" + quote + "</p>" + "<p>" + author + "</p>");
  }

  $("#quote_button").click(function () {
    getQuoteFromApi();
  });

  // run this first time only so user don't have to wait for api to get qoute 
  getQuoteFromFallback();

});
