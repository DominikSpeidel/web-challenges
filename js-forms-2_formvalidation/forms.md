# Forms

```
console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

<br>
<div style="display: flex;">
    <img src="forms_formvalidation.png" alt="Bild 1" style="width: 50%;">
</div>
<br>