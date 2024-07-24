//POPUP IMAGES
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '.instruction-image',
  children: 'a',
  pswpModule: () => import('./photoswipe.esm.js')
});
lightbox.init();