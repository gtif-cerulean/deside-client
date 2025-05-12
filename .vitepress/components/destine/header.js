import feather from "feather-icons";

/* get css variables */
let body = document.querySelector('body')
let backgroundColor = getComputedStyle(body).getPropertyValue('--desp-background-color');
let backgroundColorTransparent = getComputedStyle(body).getPropertyValue('--desp-background-color-transparent');

/* set variables */
let mainContainer = document.querySelector('.VPContent');
let footerContainer = document.getElementById('footer-container');	
let header = document.getElementById('desp-header-container');
let headerInfoButton = document.getElementById('info-button');
let headerUserButton = document.getElementById('login-div');
let headerInfoFrame = document.getElementById('info-frame');
let headerUserFrame = document.getElementById('user-frame');
let hidingInfoMenuId;
let hidingUserMenuId;
let headerInfoMenuIsVisible = false;
let headerUserMenuIsVisible = false;
let hideMenuTimeout = 2000;
let headerHeight = getComputedStyle(body).getPropertyValue('--header-height');
let headerHasRevealed = false;
let scrollPositionPrec = 0;
let tempPrevPos = 0;
let hidingTimeoutId;
let hideTimeout = 2000;
let dropdownMenuContainer = document.getElementById('dropdown-menu-container');
let menuIcon = document.getElementById('menu-icon');
let dropdownIsVisible = false;

/* TO DEVS: Boolean that has to be set on user login/logout -> see onUserAuthenticationChange() example code*/
let userIsAuthenticated = false;

/* Listener to color current header menu link */
window.addEventListener('DOMContentLoaded', () => {
  let currentLinks = document.querySelectorAll('a[href="'+document.URL+'"]');
  currentLinks.forEach(link => link.classList.add('current-link'));
});

/* Header show/hide functions */
window.addEventListener('scroll', (e) => {
  let deltaY = window.scrollY - tempPrevPos;
  setTimeout(() => {
    if (window.scrollY < 200) {
      header.style.backgroundColor = backgroundColor;
    }
  }, 500);
  if (deltaY > 0 && deltaY < 100) {
    setTimeout(() => {
      scrollPositionPrec = window.scrollY;
    }, 500);
    if (headerHasRevealed) {
      clearTimeout(hidingTimeoutId);
      headerHasRevealed = false;
      header.style.transition = 'top 500ms ease-in-out, background-color 500ms ease-in-out';
      header.style.top = "-" + headerHeight;
      setTimeout(() => {
        header.style.position = 'static';
        header.style.backgroundColor = backgroundColor;
        hideHeaderInfoMenu();
        hideHeaderUserMenu();
      }, 500);
    }
  } else if (deltaY < 0 && deltaY > -100) {
    if (window.scrollY >= 200) {
      header.style.backgroundColor = backgroundColorTransparent;
      header.style.transition = 'top 250ms ease-in-out, background-color 500ms ease-in-out';
      header.style.top = '0px';
      header.style.position = 'sticky';
      setTimeout(() => {
        headerHasRevealed = true;
      }, 500);
      clearTimeout(hidingTimeoutId);
      hidingTimeoutId = setTimeout(() => {
        header.style.transition = 'top 500ms ease-in-out, background-color 500ms ease-in-out';
        header.style.top = "-" + headerHeight;
      }, hideTimeout);
    }
  }
  tempPrevPos = window.scrollY;
});

header.addEventListener('mouseover', () => {
  clearTimeout(hidingTimeoutId);
});
header.addEventListener('mouseleave', () => {
  hidingTimeoutId = setTimeout(() => {
    header.style.transition = 'top 500ms ease-in-out, background-color 500ms ease-in-out';
    header.style.top = "-" + headerHeight;
  }, hideTimeout);
});

function onUserAuthenticationChange() {
  let loggedElements = document.getElementsByClassName('logged');
  let notLoggedElements = document.getElementsByClassName('not-logged');
  if (userIsAuthenticated) {
    [].forEach.call(loggedElements, (el) => {
      el.style.display = 'flex';
    });
    [].forEach.call(notLoggedElements, (el) => {
      el.style.display = 'none';
    });
  } else {
    [].forEach.call(loggedElements, (el) => {
      el.style.display = 'none';
    });
    [].forEach.call(notLoggedElements, (el) => {
      el.style.display = 'flex';
    });
  }
}
onUserAuthenticationChange();


/* Header info/user menu show/hide functions */
function showHeaderInfoMenu() {
  headerInfoFrame.style.display = 'flex';
  headerInfoFrame.style.opacity = '1.0';
  headerInfoMenuIsVisible = true;
}
function showHeaderUserMenu() {
  headerUserFrame.style.display = 'flex';
  headerUserFrame.style.opacity = '1.0';
  headerUserMenuIsVisible = true;
}
function hideHeaderInfoMenu() {
  headerInfoFrame.style.display = 'none';
  headerInfoFrame.style.opacity = '0.0';
  headerInfoMenuIsVisible = false;
}
function hideHeaderUserMenu() {
  headerUserFrame.style.display = 'none';
  headerUserFrame.style.opacity = '0.0';
  headerUserMenuIsVisible = false;
}
let events = ['click'];
events.forEach(event => {
  headerInfoButton.addEventListener(event, () => {
    if (headerInfoMenuIsVisible) {
      hideHeaderInfoMenu();
    } else {
      showHeaderInfoMenu();
      hideHeaderUserMenu();
    }
  });
  
  headerUserButton.addEventListener(event, () => {
    if (headerUserMenuIsVisible) {
      hideHeaderUserMenu();
    } else {
      if (userIsAuthenticated) {
        showHeaderUserMenu();
        hideHeaderInfoMenu();
      }
    }
  });
});


/* Header mobile dropdown menu show/hide functions */
function hideDropdownMenu() {
  dropdownMenuContainer.style.display = 'none';
  dropdownIsVisible = false;
}

function setupMenuIcon() {
  menuIcon.addEventListener('click', (e) => {
    clearTimeout(hidingTimeoutId);
    if (dropdownIsVisible) {
      menuIcon.setAttribute('data-feather', 'menu');
      hideDropdownMenu();
      mainContainer.style.display = 'block';
      footerContainer.style.display = 'flex';
    } else {
      menuIcon.setAttribute('data-feather', 'x');
      mainContainer.style.display = 'none';
      footerContainer.style.display = 'none';
      header.style.backgroundColor = backgroundColor;
      dropdownMenuContainer.style.display = 'flex';
      dropdownIsVisible = true;
    }
    feather.replace();
    menuIcon = document.getElementById('menu-icon');
    setupMenuIcon();
  });
}
feather.replace();
menuIcon = document.getElementById('menu-icon');
setupMenuIcon();

function hideDDMenuOnBigScreen(x) {
  if (x.matches) {
    menuIcon.setAttribute('data-feather', 'menu');
    feather.replace();
    menuIcon = document.getElementById('menu-icon');
    setupMenuIcon();

    hideDropdownMenu();
    mainContainer.style.display = 'block';
    footerContainer.style.display = 'flex';
  } else {
  }
}
var x = window.matchMedia('(min-width: 1025px)');

hideDDMenuOnBigScreen(x);
x.addEventListener('change', function() {
  hideDDMenuOnBigScreen(x);
});