// Sticky header on large screens.
window.onscroll = function() {stickyFunction()};

let header = document.getElementById("mainNav");
let sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};





// displaying desktop dropdown list contents
var desktopDropDownListLinks = document.getElementsByClassName("desktop-dropdown-list-link");
var desktopDropDownLists = document.getElementsByClassName("entertainment");
var sports = document.getElementsByClassName("sports");
var shops = document.getElementsByClassName("shop");


// Displaying other contents in the ENTERTAINMENT dropdown
function openDesktopDropdownListConent(contentName) {

  for(desktopDropDownListLink of desktopDropDownListLinks) {
    desktopDropDownListLink.classList.remove("active-desktop-dropdown-list-link");
  }

  for(desktopDropDownList of desktopDropDownLists) {
    desktopDropDownList.classList.remove("active-desktop-dropdown-content");
  }

  event.currentTarget.classList.add("active-desktop-dropdown-list-link");
    document.getElementById(contentName).classList.add("active-desktop-dropdown-content");
}


// Displaying other contents in the SPORTS dropdown
function openDesktopDropdownListContentSports(contentName) {

  for(desktopDropDownListLink of desktopDropDownListLinks) {
    desktopDropDownListLink.classList.remove("active-desktop-dropdown-list-link");
  }

  for(sport of sports) {
    sport.classList.remove("active-desktop-dropdown-content");
  }

  event.currentTarget.classList.add("active-desktop-dropdown-list-link");
    document.getElementById(contentName).classList.add("active-desktop-dropdown-content");
}


// Displaying other contents in the SHOP dropdown
function openDesktopDropdownListContentShop(contentName) {

  for(desktopDropDownListLink of desktopDropDownListLinks) {
    desktopDropDownListLink.classList.remove("active-desktop-dropdown-list-link");
  }

  for(shop of shops) {
    shop.classList.remove("active-desktop-dropdown-content");
  }

    event.currentTarget.classList.add("active-desktop-dropdown-list-link");
    document.getElementById(contentName).classList.add("active-desktop-dropdown-content");
}


// displaying the sidebar content of recent, popular, and comments on hover.
let generalTabLinks = document.getElementsByClassName("general-tab_link");
let recentPopularComments = document.querySelectorAll(".recent-popular-comment");

function displayrecentPopularComment(active_tab_name) {

  for (generalTabLink of generalTabLinks) {
    generalTabLink.classList.remove("general-tab_link_active");
  }

  for (recentPopularComment of recentPopularComments) {
    recentPopularComment.classList.remove("general-tab_item_active");
  }

  event.currentTarget.classList.add("general-tab_link_active");
  document.getElementById(active_tab_name).classList.add("general-tab_item_active");
}



let ts = document.getElementsByClassName("trending_tab_active")
let trendingLists = document.querySelectorAll(".trending_list");

function trending (trending_list) {

  for (t of ts) {
    t.classList.remove("trending_tab_active");
  }

  for (trendingList of trendingLists) {
    trendingList.classList.remove("trending_active");
  }

  event.currentTarget.classList.add("trending_tab_active");
  document.getElementById(trending_list).classList.add("trending_active");
}


// Displaying the share modal to share news links
let shareModal = document.getElementById("shareModal");
let shareBtns = document.querySelectorAll(".share-btn");
let closeModalBtn = document.getElementById("closeModalBtn");
let modalBackdrop = document.querySelector(".modal_backdrop");

for (shareBtn of shareBtns) {

  shareBtn.addEventListener("click", () => {
    // Checking if the device supports Web Share API.
    if (navigator.share) {
      // Assigning the news title and URL into variables newsTitle and newsURL respectively.
      let newsTitle = window.document.title;
      let newsURL = window.document.location.href;
      navigator.share({
        title: `${newsTitle}`,
        url: `${newsURL}`
      }) 
      //This else clause of the if statement, handles fallbacks; if the browser or device doesn't support Web Share API.
    } else {
      shareModal.classList.add("show-modal");
    }
  })
}

closeModalBtn.addEventListener("click", () => {
  shareModal.classList.remove("show-modal");
})

modalBackdrop.addEventListener("click", () => {
  shareModal.classList.remove("show-modal");
})


// Copying sharable news URL to clipboard through a button click.
let copySharableNewsLinkBtn = document.getElementById("copySharableNewsLinkBtn");
let sharableNewsLink = document.getElementById("sharableNewsLink")

copySharableNewsLinkBtn.addEventListener("click", function copyToClipboard() {
  navigator.clipboard.writeText(sharableNewsLink.value);
  copySharableNewsLinkBtn.innerHTML = "<i class='fa fa-clipboard-check'></i> <span>Copied</span>";
})


// Assigning variables for cookies from the DOM;
const cookiesModal = document.querySelector(".cookies-modal");
const cookiesModalContent = document.querySelector(".cookies-modal-content");
const closeCookies = document.querySelectorAll(".close-cookies");
const accceptCookiesBtn = document.getElementById("acceptCookiesBtn")

// Creating a function that creates a coookie in the browser.
function setCookie(name, value, expirationDays) {
  let date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "Cookies expires on" + date.toUTCString();
  document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

// Creating cookies in browser when the acceptCookiesBtn is clicked.
accceptCookiesBtn.addEventListener("click", () => {
  setCookie("cookies", true, 30)
  cookiesModal.classList.remove("show");
})

// Checking if cookies already exist in the browser.
function checkCookie (cookieName) {
  const name = cookieName + "=";
  const deCoded = decodeURIComponent(document.cookie);
  const cookieArray = deCoded.split("; ");
  let cookieValue;

  for (value of cookieArray) {
    if(value.indexOf(name) === 0) {
      cookieValue = value.substring(name.length);
    }
  }
  return cookieValue;
}

// Hiding cookies content if cookies already exist, or display if it doesn't.
cookiesMessage = () => {
  if(!checkCookie("cookies")) {
    cookiesModal.classList.add("show");
  } else {
    cookiesModal.classList.remove("show");
  }
}
// Displaying cookie content on load if user hasn't accepted cookies yet.
window.addEventListener("load", cookiesMessage);

// Showing off cookies content when close-cookies are clicked
for (closeCookie of closeCookies) {
  closeCookie.addEventListener("click", () => {
    cookiesModal.classList.remove("show")
  })
}








// show more menu on small screen devices
let mobileMenuTrigger = document.querySelector(".mobile-menu-trigger");
let mobileDropdown = document.querySelector(".mobile-dropdown");


mobileMenuTrigger.addEventListener("click", () => {
  mobileDropdown.classList.toggle("show");
  const menuOpen = mobileMenuTrigger.getAttribute("aria-menu-open");

  if (menuOpen === "false") {
    mobileMenuTrigger.setAttribute("aria-menu-open", true);
    mobileMenuTrigger.innerHTML = "<span ><i class='fa fa-close'></i></span> Close";
  } else if (menuOpen === "true") {
    mobileMenuTrigger.setAttribute("aria-menu-open", false);
    mobileMenuTrigger.innerHTML = "<span ><i class='fa fa-bars'></i></span> More"
  }
})



// Displaying trending menu dropdown list: business, politics, kids-corner on mobile devices.
let trendingMenuTrigger = document.querySelector(".trending-menu-dropdown-trigger");
let trendingMenu = document.querySelector(".trending-dropdown");

trendingMenuTrigger.addEventListener("click", () => {
  trendingMenu.classList.toggle("show");
})