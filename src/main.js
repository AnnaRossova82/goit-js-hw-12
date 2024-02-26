import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from './partials/js/pixabay-api.js';
import { displayImages } from './partials/js/render-functions.js';
import { Spinner } from 'spin.js';


document.addEventListener('DOMContentLoaded', function () {
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const galleryContainer = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMore');


const lightbox = new SimpleLightbox('.gallery-container a');


const opts = {
lines: 13,
length: 38,
width: 17,
radius: 45,
scale: 1,
corners: 1,
speed: 1,
rotate: 0,
animation: 'spinner-line-fade-quick',
direction: 1,
color: '#16ca34',
fadeColor: 'transparent',
top: '50%',
left: '50%',
shadow: '0 0 1px transparent',
zIndex: 2000000000,
className: 'spinner',
position: 'absolute',
};


const target = document.getElementById('loader');
const spinner = new Spinner(opts);


let currentPage = 1;
let currentSearchTerm = '';
const perPage = 15;


searchForm.addEventListener('submit', async function (e) {
e.preventDefault();
spinner.spin(target);
currentSearchTerm = searchInput.value.trim();
galleryContainer.innerHTML = '';
loadMoreBtn.style.display = 'none';
currentPage = 1;
await fetchAndDisplayImages();
});


loadMoreBtn.addEventListener('click', async function () {
startSpinner();
loadMoreBtn.style.display = 'none';
await fetchAndDisplayImages();
});


async function fetchAndDisplayImages() {
    try {
        const data = await fetchImages(currentSearchTerm, currentPage, perPage);
        stopSpinner();

        if (data.hits.length > 0) {
            displayImages(data.hits, galleryContainer, lightbox);

            const totalHits = data.totalHits || 0;
            const lastPage = Math.ceil(totalHits / perPage);

            if (currentPage >= lastPage) {
                iziToast.info({
                    title: 'Info',
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topCenter',
                });
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }

            currentPage++;
            const cardHeight = document.querySelector('.card').getBoundingClientRect().height;
            window.scrollBy({
                top: 2 * cardHeight,
                behavior: 'smooth',
            });
        } else {
            iziToast.info({
                title: 'Info',
                message: 'No results found.',
                position: 'topCenter',
            });
            loadMoreBtn.style.display = 'none';
        }
    } catch (error) {
        stopSpinner();
        console.error('Error fetching images:', error);
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again later.',
            position: 'topCenter',
        });
    }
}

function startSpinner() {
    spinner.spin(loader);
}

function stopSpinner() {
    spinner.stop();
}
});

export const loadMoreBtn = document.getElementById('loadMore'); 