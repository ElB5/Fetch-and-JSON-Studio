// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
      response.json().then((json) => {
        let astro = document.getElementById("container");
        let block = "";
        for (let i = 0; i < json.length; i++) {
          block += `
          <div class="astronaut">
            <div class-"bio">
            
              <h3>${json[i].firstName} ${json[i].lastName}</h3>
              <ul>

                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li> 
              </ul> 
            </div>
            <img class="avatar" src="${json[i].picture}">
           </div>
            `
      
        }
          astro.innerHTML = block;
          console.log(block);
      })
    })
  
});
