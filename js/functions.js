$(document).ready(function(){

    var fallbackQuotes = { "quotesArray":[
        {
            "quote":"A banker is a fellow who lends you his umbrella when the sun is shining and wants it back the minute it begins to rain.",
            "author":"Mark Twain"
        },
        {
            "quote":"A horse!  A horse!  My kingdom for a horse!",
            "author":"Wm. Shakespeare, \"Richard III\""
        },
        {
            "quote":"A kind of Batman of contemporary letters.",
            "author":"Philip Larkin on Anthony Burgess"
        },
        {
            "quote":"Big book, big bore.",
            "author":"Callimachus"
        },
        {
            "quote":"Seeing that death, a necessary end, Will come when it will come.",
            "author":"William Shakespeare, \"Julius Caesar\""
        },
        {
            "quote":"Something's rotten in the state of Denmark.",
            "author":"Shakespeare"
        },
        {
            "quote":"Sometimes I wonder if I'm in my right mind.  Then it passes off and I'm as intelligent as ever.",
            "author":"Samuel Beckett, \"Endgame\""
        }
    ]};

    var quotes;
    var currentQuote;


    $("button").click(function(){

        readJSON();
        prepeareNextQuote();
        $(".output").html("<p>" + currentQuote.quote + "</p>" + "<p>" + currentQuote.author + "</p>");

    });



    function prepeareNextQuote() {
        //var randomNum = Math.floor((Math.random() * fallbackQuotes.quotesArray.length));
        //currentQuote = fallbackQuotes.quotesArray[randomNum];
        var randomNum = Math.floor((Math.random() * quotes.quotesArray.length));
        currentQuote = quotes.quotesArray[randomNum];
        //console.log(randomNum + "/" + quotes.length);
        //console.log(currentQuote);
    }

    function readJSON() {
        quotes = $.getJSON("js/quotes.json");
        console.log(quotes);
    }



});
