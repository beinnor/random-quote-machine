$(document).ready(function(){


    var fallbackQuotes = { "quotesArray":[
        {
            "quote":"XA banker is a fellow who lends you his umbrella when the sun is shining and wants it back the minute it begins to rain.",
            "author":"Mark Twain"
        },
        {
            "quote":"XA horse!  A horse!  My kingdom for a horse!",
            "author":"Wm. Shakespeare, \"Richard III\""
        },
        {
            "quote":"XA kind of Batman of contemporary letters.",
            "author":"Philip Larkin on Anthony Burgess"
        },
        {
            "quote":"XBig book, big bore.",
            "author":"Callimachus"
        },
        {
            "quote":"XSeeing that death, a necessary end, Will come when it will come.",
            "author":"William Shakespeare, \"Julius Caesar\""
        },
        {
            "quote":"XSomething's rotten in the state of Denmark.",
            "author":"Shakespeare"
        },
        {
            "quote":"XSometimes I wonder if I'm in my right mind.  Then it passes off and I'm as intelligent as ever.",
            "author":"Samuel Beckett, \"Endgame\""
        }
    ]};

    var allQuotes;
    var currentQuote;

    getAllQuotes();

    $("button").click(function(){

        prepeareNextQuote();
        $(".output").html("<p>" + currentQuote.quote + "</p>" + "<p>" + currentQuote.author + "</p>");

    });



    function prepeareNextQuote() {

        var randomNum = Math.floor((Math.random() * allQuotes.quotesArray.length));
        currentQuote = allQuotes.quotesArray[randomNum];

    }

    function prepareFallbackQuote() {

        var randomNum = Math.floor((Math.random() * fallbackQuotes.quotesArray.length));
        currentQuote = fallbackQuotes.quotesArray[randomNum];

    }

    function getAllQuotes() {
        $.getJSON("js/quotesl.json", data, function(data, status) {

            if(status === 200) {
                quotes = data;
            } else {
                prepareFallbackQuote();
            }

        });
    }



});
