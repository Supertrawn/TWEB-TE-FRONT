//API KEY: f1be4bafe6f7cb0cb84f5948c5b75497

function getfilmsJson(){
  return fetch(`https://api.themoviedb.org/3/movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497`)
    .then(res => res.json)
}

var app = new Vue({ 
  el: '#app',
  data: {
      message: 'truc machin'
  }
});

console.log(getfilmsJson().then(movies => movies));

console.log("coucou");

app.message = "hoo tristesse, impossible de faire quoique ce soit avec ce json...";
