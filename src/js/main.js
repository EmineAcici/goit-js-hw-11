import { getSearchQuery } from './searchForm';
import { updateGallery, clearGallery } from './imageGallery';
import { fetchImage } from './fetchApi';

// Dokümantasyonda belirtilen import
import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

const loadingMessage = document.querySelector('.loading-text');

getSearchQuery(query => {
  clearGallery();
  loadingMessage.classList.remove('is-hidden');

  fetchImage(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      updateGallery(images);
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message:
          'Something went wrong while connecting to the server. Please try again later!',
        position: 'topRight',
      });
      console.log(err);
    })
    .finally(() => {
      loadingMessage.classList.add('is-hidden');
    });
});
