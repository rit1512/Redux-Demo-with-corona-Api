import { FETCH_POSTS} from './type';

export const fetchPosts = () => dispatch => {
 
  fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "cca52690damshbc108c5ca1c4659p11553fjsn528029ec7a05"
	}
})
.then(response => {
  return response.json();
}).then(posts=> {
  dispatch({
    type:FETCH_POSTS,
    payload:posts.countries_stat
  })
  console.log(posts.countries_stat)
})
.catch(err => {
	console.log(err);
});

};


