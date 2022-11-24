/*window.console.log --no need to write this becaude all js are in window element  */
// get quuotes with API

const quote_container=document.getElementById('code-container');
const quote_text=document.getElementById('quote');
const author=document.getElementById('author');
const btntwitter=document.getElementById('btntwitter');
const btnnew=document.getElementById('btnnew');
const loader=document.getElementById('loader');


let apiQuotes=[];


function loading()
{
    loader.hidden=false;
    quote_container.hidden=true;
}

function load_container()
{
    loader.hidden=true;
    quote_container.hidden=false;
}
//Generate new Quote
function newQuote()
{
    //loading();
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote);
    quote_text.textContent=quote.text;
    if (author==null)
    {
        author.textContent='-Anonymous';
    }
    else
    {
        author.textContent='-'+quote.author;
        //load_container();
    }
}

async function getQuotes()
{
    //loading();
    const apiurl='https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try{
        const response=await fetch(apiurl);
        apiQuotes=await response.json();
        //console.log(apiQuotes);
        newQuote();
    }
    catch(error)
    {
        alert("alert");
    }
}

function tweet()
{
    const twitterurl=`https://twitter.com/intent/tweet`;
    window.open(twitterurl,'__blank');
}


btntwitter.addEventListener('click',tweet);
btnnew.addEventListener('click',getQuotes);


//loading();
getQuotes();