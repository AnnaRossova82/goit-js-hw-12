import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './partials/js/pixabay-api.js';
import { displayImages } from './partials/js/render-functions.js';


document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const galleryContainer = document.getElementById('gallery');
    const loader = document.getElementById('loader');

    const lightbox = new SimpleLightbox('.gallery-container a');


    let currentPage = 1;
    let currentSearchTerm = '';
    const perPage = 15;
    let loadMoreBtn; 

    searchForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        currentSearchTerm = searchInput.value.trim();
        galleryContainer.innerHTML = '';
        loader.style.display = 'block';
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
        currentPage = 1;
        await fetchAndDisplayImages();
    });

    loadMoreBtn = document.getElementById('loadMore'); 
    loadMoreBtn.insertAdjacentElement('afterend', loader);

    loadMoreBtn.addEventListener('click', async function () {
        loader.style.display = 'block';
        await fetchAndDisplayImages();
    });

    async function fetchAndDisplayImages() {
        try {
            const data = await fetchImages(currentSearchTerm, currentPage, perPage);
            console.log('Total Hits:', data.totalHits);

            loader.style.display = 'none';

            if (data.hits.length > 0) {
                displayImages(data.hits, galleryContainer, lightbox);
                if (currentPage === 1 && loadMoreBtn) {
                    loadMoreBtn.style.display = 'block';
                }
                currentPage++;
           
                const cardHeight = document.querySelector('.card').getBoundingClientRect().height;
              
                window.scrollBy({
                    top: 2 * cardHeight,
                    behavior: 'smooth',
                });
            } else {
                if (loadMoreBtn) {
                    loadMoreBtn.style.display = 'none';
                }
                const totalHits = data.totalHits || 0;

                if (currentPage * perPage >= totalHits) {
                    iziToast.info({
                        title: 'Info',
                        message: 'You have reached the end of search results.',
                        position: 'topCenter',
                    });
                }
            }
        } catch (error) {
            loader.style.display = 'none';
            console.error('Error fetching images:', error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again later.',
                position: 'topCenter',
            });
        }
    }
});

export const loadMoreBtn = document.getElementById('loadMore');
