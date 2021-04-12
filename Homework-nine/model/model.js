var homeContent = ` <section class="Dishes-to-order">
<div class="section-title1">
    <h1>MORE THAN 20,000 DISHES ONLINE!</h1>
    <p>Welcome to the biggest network of Recipe Finding!</p>
</div>
<ul class="food-examples">
    <li>
        <div>
            <div class="Sushi"></div>
            <div class="text">
                <div class="text-header"><h3>SUSHI</h3></div>
                <div class="text-para"><p>More than 50 kinds of sushi Recipe's</p></div>
            </div>
        </div>
    </li>
    <li>
        <div>
            <div class="Pizza"></div>
            <div class="text">
                <div class="text-header"><h3>PIZZA</h3></div>
                <div class="text-para"><p>More than 50 kinds of Pizza Recipe's</p></div>
            </div>
        </div>
    </li>
    <li>
        <div>
            <div class="Burgers">
            </div>
            <div class="text">
                <div class="text-header"><h3>BURGERS</h3></div>
                <div class="text-para"><p>More than 50 kinds of Burger Recipe's</p></div>
            </div>
        </div>
    </li>
    <li>
        <div>
            <div class="Desserts"></div>
            <div class="text">
                <div class="text-header"><h3>DESSERTS</h3></div>
                <div class="text-para"><p>More than 50 kinds of Dessert Recipe's</p></div>
            </div>
        </div>
    </li>
</ul>
</section>`;
var aboutContent = `<div class="about-content">
<div class="two-columns">
    <div class="Welcome">
        <h1>WELCOME!</h1>
        <h5>Who We Are</h6>
            <div class="text-wrapper">
                <p>"Vision Delivery is a young fast growing company that works to make your life easier. We take
                    responsibility for making sure that you never have to worry about spending hours online
                    searching endlessly for a recipe."</p>
            </div>
            <div class="client-name">-Amelia Mcloughlin</div>
            <div class="AppOrder">
                <div class="Restaurants"></div>
                <div class="App"></div>
            </div>
    </div>
    <div class="image">
        <!-- Insert image here, image goes on right taking up a little less than 50% of the page, for place holder add backgorund color -->
    </div>
</div>
<section class="our-team">
    <div class="our-team-title">
        <h1>OUR TEAM</h1>
        <p>The best professionals</p>
    </div>
    <ul class="team">
        <li>
            <div>
                <div class="Darryl"></div>
                <div class="text">
                    <div class="text-header"><h3>Darryl Sears</h3></div>
                    <div class="text-para"><p>Driving the financial planning of the company by analying its performance and risks.</p></div>
                </div>
            </div>
        </li>
        <li>
            <div>
                <div class="Kean"></div>
                <div class="text">
                    <div class="text-header"><h3>Kean Tucker</h3></div>
                    <div class="text-para"><p>Developing the marketing strategy for new and existing recipes</p></div>
                </div>
            </div>
        </li>
        <li>
            <div>
                <div class="Aliya"></div>
                <div class="text">
                    <div class="text-header"><h3>Aliya Davis</h3></div>
                    <div class="text-para"><p>Responsible for the successful leadership and management of the company.</p></div>
                </div>
            </div>
        </li>
    </ul>
</section>
</div>`;
var galleryContent = `<h1>View our amazing recepies</h1>
<div class="recipes">

    <div class="recipe recipe-1">
        <div class="content">
            <h1>Burger Recipe's</h1>
            <p>Recipe's for Burger lovers!</p>
        </div>
    </div>
    <div class="recipe recipe-2">
        <div class="content">
            <h1>Fish Recipe's</h1>
            <p>Recipes for fish lovers and event holders!</p>
        </div>
    </div>
    <div class="recipe recipe-3">
        <div class="content">
            <h1>Cultural Recipe's</h1>
            <p>View recipes for different cultures</p>
        </div>
    </div>
    <div class="recipe recipe-4">
        <div class="content">
            <h1>Recipe's for toppings</h1>
            <p>Learn how to make homemade toppings</p>
        </div>
    </div>
    <div class="recipe recipe-5">
        <div class="content">
            <h1>Breakfast Recipe's</h1>
            <p>Recipe's for yummy breakfasts!</p>
        </div>
    </div>
    <div class="recipe recipe-6">
        <div class="content">
            <h1>Pizza Recipe's</h1>
            <p>Learn how to cook several kinds of Pizza</p>
        </div>
    </div>
    <div class="recipe recipe-7">
        <div class="content">
            <h1>Desserts</h1>
            <p>View recipe's for yummy desserts</p>
        </div>
    </div>
    <div class="recipe recipe-8">
        <div class="content">
            <h1>Salad Recipe's</h1>
            <p>For the healthy side of your food endeavors, view our salad recipe collection.</p>
        </div>
    </div>
    <div class="recipe recipe-9">
        <div class="content">
            <h1>Dip Recipe's</h1>
            <p>For the superbowl and big gaming event's or when you just want a bag of chips!</p>
        </div>
    </div>
</div>
`;
var contactContent = `<div class='content-section1'>
<div class='three-columns'>
    <div class='Address'>
        <h1>Address</h1>
        <p>18 High Ridge Court
            Superior, WI 54880</p>
    </div>
    <div class='phone'>
        <h1>Phone</h1>
        <p class='contact-info'>202-555-0127</p>
    </div>
    <div class='email'>
        <h1>Email</h1>
        <p class='contact-info'>visiondelivery@yourfavoriterestauraunt.com</p>
    </div>
</div>

</div>`;

var homeStuff = `<h1>VISION DELIVERY</h1>
<p>From your Favorite Restaurants!</p>
<button class="menu">Menu</button>`;
var aboutStuff = `<h1>ABOUT US</h1>`;
var galleryStuff = `<h1>CHECK OUT OUR AMAZING RECIPES</h1>
<p>From your Favorite Restaurants!</p>`;
var contactStuff = `<h1>CONTACT US</h1>
<p>From your Favorite Restaurants!</p>`;


export function getPageContent(pageId){
    $("#app").html(eval(pageId));
};

export function getHeroContent(pageId){
    $(".title").html(eval(pageId));
}