// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&";




// used to truncate the string
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


// banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);

  // every refresh the movie will be change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner_title");
  var banner_desc = document.getElementById("banner_desc");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  banner_desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = setMovie.name;
})


