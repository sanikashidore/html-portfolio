document.getElementById("search-btn").addEventListener("click", () => {
    const country = document.getElementById("country-input").value;
    if (country === '') 
        {
        alert("Please enter a country name");
        return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            const countryInfo = data[0];
            displayCountryInfo(countryInfo);
        })
        .catch(error => {
            console.error('Error fetching the country data:', error);
            alert("Country not found, please try again.");
        });
});

function displayCountryInfo(country) {
    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
    `;
}
