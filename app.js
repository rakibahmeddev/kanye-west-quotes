const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
loadQuotes();


// display on UI

// const displayQuote = (quote) => {
const displayQuote = quote => {
    // console.log(quote)
    const quoteElement = document.getElementById('quotes');
    quoteElement.innerText = quote.quote;

}