/// script to go through the ilias and campus pages

const iURL = window.location.href;
// cmdClass=ilstartupgui

if (iURL.indexOf("iliasnet.de/login") > -1) {
  console.log("URL detected");
  clickButtonByClass('btn btn-default btn-sm');
  // setTimeout(function () { clickButtonByClass('btn btn-default btn-sm'); }, 1000);
}
else {
  console.log("no URL detected!");
}

/* * * * */

// function detectMoreComplexUrl() {
//   // return false for an URL to a forum Link
//   if (window.location.href.toLowerCase().indexOf("https://comhard.iliasnet.de/ilias.php?baseclass=ilrepositorygui&cmd=viewthread") > -1) {
//     console.log("Forum Link detected, IliasLogin not executing because you should already be logged in.")
//     return false
//   }

//   // return true for any other URL which links to Magazin but is not a forum URL. If you are already logged in, the login Button is not there so it won't fire
//   if (window.location.href.toLowerCase().indexOf("https://comhard.iliasnet.de/ilias.php?baseclass=ilrepositorygui") > -1) {
//     console.log("Magazin URL detected, Extensions firering")
//     return true
//   }
// }

/* * * * */

// function clickButtonById(id) {
//   document.getElementById(id).click();
//   console.log("button clicked:", id);
// }

/* * * * */

function clickButtonByClass(className, index = 0) {
  var loginButton = document.getElementsByClassName(className)[index];
  var inputFields = document.querySelectorAll("input");
  console.log("button to be clicked: ");
  console.log(loginButton);
  console.log("INPUTs: ");
  console.dir(inputFields);
  setTimeout(function () {
    // console.dir(loginButton);
    loginButton.click();
  }, 2000);
  // loginButton.click();
  // console.log("button clicked:", className);
}

/* * * * */

// function clickListElement(listId, elementNumber) {
//   console.log("ClickListElementFct firing")
//   tagNameListElement = "li"
//   urlElement = "a"
//   var listElement = document.getElementById(listId).getElementsByTagName(tagNameListElement)[elementNumber].getElementsByTagName(urlElement)[0]
//   console.log("listElement URL: " + listElement + " about to be clicked")
//   listElement.click()
//   console.log("listElement URL clicked on")
// }
