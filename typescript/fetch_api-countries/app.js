var container = document.getElementById("countries");
function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data); // Debug check
        displayCountries(data.slice(0, 15)); // Slice AFTER confirming array
    })
        .catch(function (error) { return console.error("Error:", error); });
}
function displayCountries(countries) {
    container.innerHTML = "";
    countries.forEach(function (country) {
        var div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.style.cursor = "pointer";
        div.innerHTML = "\n      <img src=\"".concat(country.flags.png, "\" width=\"80\"><br>\n      <strong>").concat(country.name.common, "</strong>\n      <p>Region: ").concat(country.region, "</p>\n    ");
        div.addEventListener("click", function () {
            var _a;
            alert("\nCountry: ".concat(country.name.common, "\nCapital: ").concat(((_a = country.capital) === null || _a === void 0 ? void 0 : _a[0]) || "N/A", "\nPopulation: ").concat(country.population.toLocaleString(), "\nRegion: ").concat(country.region, "\n"));
        });
        container.appendChild(div);
    });
}
fetchCountries();
