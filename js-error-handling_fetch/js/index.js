console.clear();

const userElement = document.querySelector(".user");
const errorOccurred = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("network error");
    return null;
  }
  const json = await response.json();
  return json.data;
}


document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try { 
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    errorOccurred.textContent = ""; // Fehlermeldung leeren
    errorOccurred.classList.remove("error");
  } catch (error) {
    //console.error('Error rendering user:', error);
    userElement.innerHTML = "User info will appear here.";
    errorOccurred.textContent = error.message;
    errorOccurred.classList.add("error");
  }
  })
);
