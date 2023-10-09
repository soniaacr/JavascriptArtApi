
/** 
 * @param img_info
 * @param img_index
 */

async function clickedEvent(img_info, img_index) {
    let info = document.getElementsByTagName('img')[img_info].attributes[1].value
    console.log(info)
    let headers = new Headers([
        ['Content-Type', 'applications/json'],
        ['Accept', 'application/json']
    ]);
    // let request = new Request(`https://api.artic.edu/api/v1/artworks?fields=${info}`,

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${info}`,
    {
        method: 'GET',
        headers : headers
    });

    let result = await fetch(request);
    
    let response = await result.json();
    
    console.log(response)
    console.log(response.data.title)
    function displayInfo(data) {
        const Shw = data.data[0];
        const parisSection = document.getElementsByTagName("section");
        const artistName = Shw.artist_title;
        const heading = document.createElement("h4");
        heading.innerHTML = artistName;
        parisSection.appendChild(heading);
    }
}


/**
 * 
 * @param id 
 * @param event 
 */

function getInfo(id, event){
    switch(id) {
        case 'fig1': {
    
            clickedEvent(0,1)

            break;
        }
        case 'fig2': {
           
            clickedEvent(1,1)
            break;
        }
        case 'fig3': {
           
            clickedEvent(2,1)
            break;
        }
        case 'fig4': {
          
            clickedEvent(3,1)
            break;
        }
    }
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}
function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}