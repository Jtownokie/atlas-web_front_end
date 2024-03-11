/* Practicing Callbacks */

function createElement(data) {
  const documentBody = document.querySelector('body')

  const pTag = document.createElement('p');
  pTag.innerHTML = data;
  documentBody.appendChild(pTag);
}

function queryWikipedia(callback) {
  const req = new XMLHttpRequest();
  const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"

  req.open("GET", url, true);
  req.responseType = 'json';

  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        const responseData = req.response;
        callback(responseData.query.pages[21721040].extract);
      } else {
        console.error('Request failed with status:', req.status);
      }
    }
  };

  req.send();
}

queryWikipedia(createElement);
