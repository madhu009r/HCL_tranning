const countriesContainer = document.getElementById("countries");
let allCountries = [];

// Fetch countries (NO API KEY REQUIRED)
fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,cca2,flags")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) {
            throw new Error("Invalid API response");
        }
        allCountries = data;
        displayCountries(data);
    })
    .catch(error => {
        console.error(error);
        countriesContainer.innerHTML = "<h4 class='text-danger'>Failed to load countries</h4>";
    });

// Display all countries
function displayCountries(countries) {
    countriesContainer.innerHTML = "";

    if (!Array.isArray(countries)) return;

    countries.forEach(country => {
        const name = country.name?.common || "N/A";
        const capital = country.capital?.[0] || "N/A";
        const region = country.region || "N/A";
        const code = country.cca2 || "N/A";
        const flag = country.flags?.png || "";

        countriesContainer.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <img src="${flag}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p><b>Capital:</b> ${capital}</p>
                        <p><b>Continent:</b> ${region}</p>
                        <p><b>Country Code:</b> ${code}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// Search filter
function filterCountries() {
    const name = document.getElementById("name").value.toLowerCase();
    const code = document.getElementById("code").value.toLowerCase();
    const continent = document.getElementById("continent").value.toLowerCase();
    const capital = document.getElementById("capital").value.toLowerCase();

    const filtered = allCountries.filter(country => {
        return (
            (country.name?.common || "").toLowerCase().includes(name) &&
            (country.cca2 || "").toLowerCase().includes(code) &&
            (country.region || "").toLowerCase().includes(continent) &&
            (country.capital?.[0] || "").toLowerCase().includes(capital)
        );
    });

    displayCountries(filtered);
}
