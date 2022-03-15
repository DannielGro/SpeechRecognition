const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('Como estas')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Muy bien gracias';
      texts.appendChild(p)
    }
    if (text.includes("Cual es tu nombre") || text.includes('Como te llamas')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Feona';
      texts.appendChild(p)
    }
    if (text.includes('Abre mi pagina')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p)
      console.log('Abriendo Codigo D')
      window.open('http://www.codigo-d.com')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();