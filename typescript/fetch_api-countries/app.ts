interface Country {
  name: { common: string };
  capital?: string[];
  region: string;
  population: number;
  flags: { png: string };
}

const container = document.getElementById("countries") as HTMLDivElement;

function fetchCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then((data: Country[]) => {
      console.log(data); // Debug check
      displayCountries(data.slice(0, 15)); // Slice AFTER confirming array
    })
    .catch(error => console.error("Error:", error));
}

function displayCountries(countries: Country[]) {
  container.innerHTML = "";

  countries.forEach(country => {
    const div = document.createElement("div");

    div.style.border = "1px solid gray";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.cursor = "pointer";

    div.innerHTML = `
      <img src="${country.flags.png}" width="80"><br>
      <strong>${country.name.common}</strong>
      <p>Region: ${country.region}</p>
    `;

    div.addEventListener("click", () => {
      alert(`
Country: ${country.name.common}
Capital: ${country.capital?.[0] || "N/A"}
Population: ${country.population.toLocaleString()}
Region: ${country.region}
`);
    });

    container.appendChild(div);
  });
}

fetchCountries();
