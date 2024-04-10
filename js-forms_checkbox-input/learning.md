## Learning
Wie bleiben HTML-Inhalte am Anfang versteckt:
```
const tosError = document.querySelector('[data-js="tos-error"]');
const successMessage = document.querySelector('[data-js="success"]');

tosError.hidden =  true;
successMessage.hidden = true;

Alternativ:
successMessage.style.display = 'none';

```
Das hidden-Attribut ist ein **Attributknoten** in HTML. Es ist ein sogenanntes globales HTML-Attribut, das von verschiedenen HTML-Elementen verwendet werden kann, um anzugeben, ob das Element sichtbar oder unsichtbar ist. Ein Attributknoten bezieht sich auf das Attribut eines HTML-Elements.


# DOM erklärt
- Ein **Dokumentknoten** stellt die gesamte Baumstruktur dar.
- Ein **Dokumentfragmentknoten** stellt einen Teil der Baumstruktur dar.
- Ein **Elementknoten** entspricht exakt einem Element in HTML oder XML.
- Ein **Attributknoten** entspricht exakt einem Attribut in HTML oder XML.
- Ein **Textknoten** stellt den Textinhalt eines Elements dar.

Attributknoten sind eine besondere Knotenart, denn sie kommen nicht als Knoten in der Baumstruktur vor, die vor allem durch Elementknoten gebildet wird. <u>Attributknoten sind demnach keine „Kinder“ von Elementknoten, sondern Eigenschaften von ihnen.</u>

## wichtige Node-Befehle

https://wiki.selfhtml.org/wiki/JavaScript/DOM/Node/textContent

```

```