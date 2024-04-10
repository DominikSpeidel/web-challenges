console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

/*cards.map((card) => {
  const lowerCaseAnswers = card.answer;
  let lowerCaseText = lowerCaseAnswers.toLowerCase();
  console.log(lowerCaseText);
  return lowerCaseText;
});*/

/*const lowerCaseAnswers = cards.map((answer) => {
  console.log(answer)
  return answer;
});*/

const lowerCaseAnswers = cards.map((card) => {
  console.log(card.answer)
  return card.answer.toLowerCase("");
});

const questionsAndAnswersTogether = cards.map((card) => {
  console.log(card.question + card.answer)
  return card.question + " - " + card.answer;
}); // ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((card) => {
  return {
    question: card.question,
    answer: card.answer
  }
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

/* Hier ist der Ablauf im Detail:

cards.map((card) => { ... }): Diese Zeile ruft die map()-Methode auf dem Array cards auf. Für jedes Element (card) im Array wird die darin enthaltene Funktion ausgeführt.

return { question: card.question, answer: card.answer }: In dieser Zeile wird für jedes Kartenobjekt ein neues Objekt erstellt. Dieses Objekt hat zwei Eigenschaften: question, die den Wert der question-Eigenschaft des aktuellen Kartenobjekts enthält, und answer, die den Wert der answer-Eigenschaft des aktuellen Kartenobjekts enthält.

Das Ergebnis dieser map()-Methode ist ein neues Array, das aus den neuen Objekten besteht, die für jedes Kartenobjekt erstellt wurden. Jedes Element im neuen Array enthält eine question- und eine answer-Eigenschaft, die den entsprechenden Werten aus den Kartenobjekten entsprechen.

Am Ende wird die Variable questionAndAnswer dieses neuen Arrays zugewiesen, das jedes Kartenobjekt durch ein neues Objekt mit den question- und answer-Eigenschaften ersetzt.*/

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
