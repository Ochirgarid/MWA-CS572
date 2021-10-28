const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

const { fromEvent, of, from, interval } = rxjs;
const { map } = rxjs.operators;
const { fromFetch } = rxjs.fetch;


fromEvent(quoteInputElement, 'input').subscribe( _ => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('');
  
  let correct = true
  from(arrayQuote).pipe(
    map((characterSpan, index) => {
      const character = arrayValue[index]
      if (character == null) {
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect');
        correct = false;
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');
      } else {
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
        correct = false;
      }
    })
  ).subscribe(null, null, null);

  if (correct) renderNewQuote();
});

let randomQuote$ = fromFetch(RANDOM_QUOTE_API_URL, {
  selector: response => response.json()
});

function renderNewQuote() {
  randomQuote$.subscribe({
    next: data => {
      quote = data.content;
      console.log(quote)
      quoteDisplayElement.innerHTML = '';
      from(quote).pipe(
        map(character => {
          const characterSpan = document.createElement('span');
          characterSpan.innerText = character;
          quoteDisplayElement.appendChild(characterSpan);
        })
      ).subscribe();
      quoteInputElement.value = null;
    },
    complete: () => console.log('done')
  });
  startTimer();
}

let startTime;
let myTimer;

function startTimer() {
  stopTimer();
  const timeRunner = interval(1000);
  timerElement.innerText = 0
  startTime = new Date()
  myTimer = timeRunner.subscribe(sec => {
    if(sec == 100) {
      renderNewQuote();
      return;
    }
    timerElement.innerText = sec;
  });
}

function stopTimer() {
  if (myTimer) myTimer.unsubscribe();
}

renderNewQuote()