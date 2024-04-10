console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    //console.log(data.results);
    console.log(data.results[2].eye_color);
    console.log(data.results[0]);
}

fetchData();
