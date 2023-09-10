// Your JSON data (extensions)
const extensions = [
  {
    "name": "bpapi-wrapper",
    "description": "A JS/TS package for Node.js to work with BDFD Public API more easily",
    "link": "https://www.npmjs.com/package/@synthexia/bpapi-wrapper"
  },
  {
    "name": "bdfd-external",
    "description": "BDFD External is a package for web scrapping BDFD Web App and make requests to it. Get your bot list and Get, Update, Create & Delete commands and variables externally!",
    "link": "https://www.npmjs.com/package/@synthexia/bdfd-external"
  },
  {
    "name": "Bot Designer For Discord",
    "description": "Our extension brings in the features for comfortable coding for your bot in BDScript",
    "link":"https://marketplace.visualstudio.com/items?itemName=Synthexia.bdfd-extension"
  }
  // Add more extensions as needed
];

// Get elements from HTML
const input = document.querySelector(".search-bar");
const resultsList = document.querySelector("#search-results");

// Function to perform the search
function searchExtensions(query) {
  query = query.toLowerCase().trim();
  const matchingExtensions = extensions.filter(extension => {
    const name = extension.name.toLowerCase();
    const description = extension.description.toLowerCase();
    return name.includes(query) || description.includes(query);
  });
  return matchingExtensions;
}

// Function to display search results
function displayResults(results) {
  resultsList.innerHTML = '';
  if (results.length === 0) {
    resultsList.innerHTML = '<li class="result">No results found.</li>';
  } else {
    results.forEach(result => {
  const li = document.createElement('li');
  li.classList.add('result');
  li.innerHTML = `
    <a href="${result.link}" target="_blank">
      <h3>${result.name}</h3>
      <p>${result.description}</p>
    </a>
  `;
  resultsList.appendChild(li);
});
  }
}

// Event listener for search input
input.addEventListener('input', () => {
  const query = input.value;
  const searchResults = searchExtensions(query);
  displayResults(searchResults);
  
  // Hide the results if the input is empty
  if (query.trim() === '') {
    resultsList.innerHTML = '';
  }
});
