import * as MODEL from "../model/model.js";

function init(){
    let currentHeroImage = "home";

    $("nav a").click(function(event){
        let btnId = this.id;
        let contentID = btnId + "Content";
        let heroID = btnId + "Stuff";

        $(".hero").removeClass(`${currentHeroImage}-hero`).addClass(`${btnId}-hero`);
        currentHeroImage = btnId;
        $(".title").html(heroID);
        
        MODEL.getPageContent(contentID);
        MODEL.getHeroContent(heroID);
    })
}

$(document).ready(function(){
    init();
    MODEL.getPageContent("homeContent");
    MODEL.getHeroContent("homeStuff");
})
