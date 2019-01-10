//API KEY: f1be4bafe6f7cb0cb84f5948c5b75497
var url ="https://api.themoviedb.org/3/movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497";

function getfilmsJson(){
  //me rappel plus de ce que fait le fetch exactement... du coup je suis pas sûr qu'il me resort le json correctement
  return fetch(url)
    .then(res => res.json)
}

var app = new Vue({ 
  el: '#app',
  data: {
      message: 'truc machin'
  }
});

/* non plus
var films = null;
getfilmsJson().then(url, function (data) {
    alert(data);
    films = data;
    alert(films);
});
console.log(films);*/

/* non plus 
function getresult(){
  getfilmsJson().results.then(rest => result)
}*/

/* non
console.log(getfilmsJson().then(movies => movies.results).then(results => results[0]).then(zero => zero.title));
*/
//normalement un json on le lit comme ça non : movies.title par exemple 

console.log("coucou");

var truc = getfilmsJson();
truc.then(function(result){
  console.log(result)
})

console.log(truc);

app.message = "hoo tristesse, impossible de faire quoique ce soit avec ce json...";

//ça ne marche toujours pas
//app.message = getfilmsJson().then(json => json.total_results);

/*Alors si j'avais réussis a faire quelque chose avec ce JSON.
  j'aurai commencer par faire une liste comme je peux en utilisant les component de vue 
  ensuite au moment du clic sur une affiche j'aurai ajouter les dit films dans une liste pour en reprendre certaine de leur caractèristique 
  et un bouton aurait changer la liste de component afin de donner des films en lien avec les caractéristique citées ci-dessus
  mais bon étant donné que j'ai été incapable de faire ne serai-ce que 5% du test.
  
  Mes excuses, votre cours est top est m'intéresse beaucoup, mais le déroulement du semestre ne m'a absolument pas permis de pratiquer le JS.
  j'ai hâte de terminer cette hieg afin de commencer à apprendre correctement et pas en mode survie...
  
  my bad en espérant que mes labo(je suis plus utiles pour les concepts que le code) et HIM suffiront.
  
  au moins vous n'aurez pas trop de peine à le corriger. */