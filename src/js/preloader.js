// preloader js

function preloader_fading() {
    document.querySelector('#preloader').fadeOut('slow');

    document.ready( () => {
        window.setTimeout(preloader_fading(), 500);
    })
}
  