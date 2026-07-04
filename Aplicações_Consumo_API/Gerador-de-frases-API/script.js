// Gerador de Frases - JavaScript
// Code by: Milenna Feijó

const newQuoteBtn = document.getElementById('new-quote-btn');
const quoteElement = document.getElementById('quote');
const baseUrl = 'https://api.adviceslip.com/advice';

async function fetchQuote() {
    const response = await fetch(baseUrl);

    if (!response.ok) {
        throw new Error('Failed to fetch quote');
    }

    return response.json();
}

const setLoadingState = (isLoading) => {
    newQuoteBtn.disabled = isLoading;
    newQuoteBtn.textContent = isLoading ? 'Loading...' : 'New Quote';
};

const renderQuote = (message) => {
    quoteElement.textContent = message;
};

const carregarFrase = async () => {
    renderQuote('Loading quote...');
    setLoadingState(true);

    try {
        const data = await fetchQuote();
        renderQuote(`"${data.slip.advice}"`);
    } catch (error) {
        renderQuote('Failed to fetch quote. Please try again.');
    } finally {
        setLoadingState(false);
    }
};

carregarFrase();
newQuoteBtn.addEventListener('click', carregarFrase);

