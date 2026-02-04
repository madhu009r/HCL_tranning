function search(){
    let lang = document.getElementById("name").value.trim();
    

    fetch(`https://restcountries.com/v3.1/lang/${lang}`)
    .then(response => response.json())
    .then(data => display(data))
    .catch(err => console.log(err));
}

function display(data){
    let result = document.getElementById("result");
    result.innerHTML = "";

    data.forEach(country => {
        const countryName = country.name.common;
        const cap = country.capital;
        const flag = country.flags.png
        const region = country.region;

        result.innerHTML += `
            <div>
                <h2>Country Name : ${countryName}</h2>
                <p>Capital : ${cap}</p>
                <p>Region : ${region}</p>
                <img src="${flag}" alt="Flag of ${countryName}" height="50px" width="50px">
            </div>
            `
    });
}