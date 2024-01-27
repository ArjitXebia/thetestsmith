function changeFavicon() {
    // Create a MediaQueryList object
    var darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
    // Log the current state of the media query
    console.log('Media query (prefers-color-scheme: dark) matches:', darkModeMediaQuery.matches);
  
    // Determine the theme based on the media query
    var darkModeOn = darkModeMediaQuery.matches;
  
    // Log the determined theme
    console.log('Determined theme:', darkModeOn ? 'Dark' : 'Light');
  
    // Get the favicon element by ID
    var favicon = document.getElementById("favicon");
  
    // Set the appropriate favicon
    favicon.href = darkModeOn ? 'images/favicon_white.ico' : 'images/favicon_black.ico';
  
    // Append a unique timestamp to force a refresh
    favicon.href += '?v=' + new Date().getTime();
  
    // Log the favicon URL being set
    console.log('Favicon set to:', favicon.href);
  }
  
  // Add event listeners
  document.addEventListener('DOMContentLoaded', changeFavicon);
  window.matchMedia('(prefers-color-scheme: dark)').addListener(changeFavicon);
  