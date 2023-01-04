/** Title: Week 1 Enterprise JavaScript set up for class
Author: Alex Thomas
Date: 1/4/2023
File: theme.js
Source Code Attribution: Week 0 and week 1 instructions
*/
/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
setDefaultTheme();

function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

/**
 * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
 */
function setSelectedTheme(x)
{
    let colorTheme = document.body.classList; // get the body's CSS class
    let iconMode = x.classList; // get the current classes assigned to the triggered button

    /**
     * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
     * local storage.
     */
    if (colorTheme.value === "light-theme")
    {
        localStorage.clear(); //clearing out the local storage
        localStorage.setItem("mode", "dark-theme");  // settingg mode to dark-them in local storage
        localStorage.setItem("iconMode", "fa-toggle-on"); // setting iconMode to fa--toggle-on
        localStorage.setItem("iconText", "Dark Mode"); //setting icon text to dark mode
     }
    /**
     * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
     * local storage.
     */
    else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }

    /**
     * Apply the updated selection to the HTML page elements
     */
    colorTheme.value = localStorage.getItem("mode"); //getting mode value from local storage that we set above earlier
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`; //getting iconMode value from local storage as well
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText"); // getting iconText value from localStorage and setting it to icon-text html element.
}