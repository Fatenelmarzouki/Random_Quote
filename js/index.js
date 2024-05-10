// 
var quoteText = document.getElementById( 'quoteText' );
var quoteAuthor = document.getElementById( 'quoteauthor' );
var quoteArray = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "Oscar Wilde, The Happy Prince and Other Stories"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves"
    },
];
var previousQuote = -1;

function displayQuote ()
{
    var randomQuote = Math.floor( Math.random() * quoteArray.length );

    while ( randomQuote == previousQuote )
    {
        randomQuote = Math.floor( Math.random() * quoteArray.length );
    }
    var dispaly = quoteArray[ randomQuote ];
    quoteText.innerHTML = `"${ dispaly.quote }"`;
    quoteAuthor.innerHTML = " -- " + dispaly.author;

    previousQuote = randomQuote;
}
