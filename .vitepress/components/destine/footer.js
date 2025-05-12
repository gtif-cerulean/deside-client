import feather from "feather-icons";

let footer = document.getElementById('footer-container');
let footerHeight = getComputedStyle(document.body).getPropertyValue('--footer-height');
let footerMenuIcon = document.getElementById('footer-menu-icon');
let footerMenu = document.getElementById('footer-menu');
let footerMenuIsVisible = false;
let footerHidingTimeoutId;
let footerHideTimeout = 4000;

let footerHasRevealed = true;
let footerScrollPositionPrec = 0;
let tempFooterPrevPos = 0;


/* Footer show/hide functions */
function hideFooter() {
  if (document.documentElement.scrollHeight != window.innerHeight && window.scrollY < (document.documentElement.scrollHeight - window.innerHeight - 50)) {
      footerHasRevealed = false;
      footer.style.transition = 'bottom 500ms ease-in-out, background-color 500ms ease-in-out';
      footer.style.bottom = "-" + footerHeight;
  }
}

function showFooter() {
  footer.style.transition = 'bottom 250ms ease-in-out, background-color 500ms ease-in-out';
  footer.style.bottom = '0px';
  footer.style.position = 'fixed';
  setTimeout(() => {
    footerHasRevealed = true;
  }, 500);
  clearTimeout(footerHidingTimeoutId);
}

window.addEventListener('scroll', (e) => {
  let deltaY = window.scrollY - tempFooterPrevPos;
  
  if (window.scrollY >= (document.documentElement.scrollHeight - window.innerHeight - 50)) {
    showFooter();
  } else {
    if (deltaY < 0 && deltaY > -100) {
      setTimeout(() => {
        footerScrollPositionPrec = window.scrollY;
      }, 500);
      if (footerHasRevealed) {
        clearTimeout(footerHideTimeout);
        hideFooter();
        setTimeout(() => {
          footerMenuIcon.setAttribute('data-feather', 'menu');
          hideFooterMenu();
          setFeather();
        }, 500);
      }
    } else if (deltaY > 0 && deltaY < 100) {
      if (window.scrollY - footerScrollPositionPrec > 0) {
        showFooter();
        footerHidingTimeoutId = setTimeout(() => {
          hideFooter();
        }, footerHideTimeout);
      }
    }
  }
  
  tempFooterPrevPos = window.scrollY;
});

footer.addEventListener('mouseover', () => {
  clearTimeout(footerHidingTimeoutId);
});
footer.addEventListener('mouseleave', () => {
  clearTimeout(footerHidingTimeoutId);
  footerHidingTimeoutId = setTimeout(() => {
    hideFooter();
  }, footerHideTimeout);
});
document.onmousemove = (e) => {
  if (e.y > window.innerHeight - 50) {
    showFooter();
  }
}

/* Footer Menu show/hide functions */
function hideFooterMenu() {
  footerMenu.style.display = 'none';
  footerMenuIsVisible = false;
}

function setupFooterMenuIcon() {
  footerMenuIcon.addEventListener('click', (e) => {
    if (footerMenuIsVisible) {
      footerMenuIcon.setAttribute('data-feather', 'menu');
      hideFooterMenu();
    } else {
      footerMenuIcon.setAttribute('data-feather', 'x');
      footerMenu.style.display = 'flex';
      footerMenuIsVisible = true;
    }
    setFeather();
  });
  footerMenu.addEventListener('mouseover', (e) => {
    clearTimeout(footerHidingTimeoutId);
  });
  footerMenu.addEventListener('mouseleave', (e) => {
    clearTimeout(footerHidingTimeoutId);
    footerHidingTimeoutId = setTimeout(() => {
      footer.style.transition = 'bottom 500ms ease-in-out, background-color 500ms ease-in-out';
      footer.style.bottom = "-" + footerHeight;
    }, footerHideTimeout);
  });
}

function setFeather() {
  feather.replace();
  footerMenuIcon = document.getElementById('footer-menu-icon');
  setupFooterMenuIcon();
}

setFeather();
