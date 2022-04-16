
const Fetch = document.getElementById("fetch");
const News = document.getElementById("t_data");



Fetch.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    const api = "https://api.covidtracking.com/v2/states/ca/daily.json";
    xhr.open("GET", api, true);
    // console.log('OPENED', xhr.readyState);
    xhr.onprogress = function () {
        // console.log('LOADING', xhr.readyState); // readyState will be 3

    }
    xhr.onreadystatechange = function () {
        // console.log(this.readyState);
    }
    xhr.onload = function () {
        const reponse = this.responseText;
        // console.log(reponse.length);
        // console.log(this.status);
        let convert = JSON.parse(reponse);
        console.log(convert);
        for (let i = 0; i < convert.data.length; i++) {
            console.log(convert.data[i]);

            
            News.innerHTML += `
            
                    <table class="table">
                     
                        <tr>
                            <td > "${convert.data[i].date}"</td>
                            <td >"${convert.data[i].cases.total.calculated.change_from_prior_day}"</td>
                            <td >"${convert.data[i].outcomes.recovered.calculated.change_from_prior_day}"</td>
                            <td >"${convert.data[i].outcomes.death.total.calculated.change_from_prior_day}"</td>
                            
                        </tr>
    
                    </tbody>
                
                    `
            

        }
    }
    xhr.send();
});


// d44423f0d0a145a2aaf86138cdb3bd12
// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d44423f0d0a145a2aaf86138cdb3bd12