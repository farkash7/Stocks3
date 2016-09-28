const reset_src = 'http://52.58.165.79/test/stocks.php?action=reset';
const profile_src = "http://52.58.165.79/test/stocks.php?action=profile";
const quotes_src = 'http://52.58.165.79/test/stocks.php?action=get_quotes';
const buyQuoteSrc = (name, quantity) => {return "http://52.58.165.79/test/stocks.php?action=buy&product="+name+"&quantity="+quantity}
const sellQuoteSrc = (name, quantity) => {return "http://52.58.165.79/test/stocks.php?action=sell&product="+name+"&quantity="+quantity}


const fetchFunc = (path, f) => {
  fetch(path)
  .then((response) => response.json())
  .then((responseData) => {
    f(responseData);
  })
  .done();
}


export {fetchFunc, reset_src, profile_src, quotes_src, buyQuoteSrc, sellQuoteSrc};
