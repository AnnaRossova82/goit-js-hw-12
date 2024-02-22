export function displayImages(images, galleryContainer, lightbox) {
    images.forEach(image => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const a = document.createElement('a');
      a.href = image.largeImageURL;
      a.setAttribute('data-lightbox', 'gallery');
  
      const img = document.createElement('img');
      img.src = image.webformatURL;
      img.alt = image.tags;
  
      a.appendChild(img);
  
      const cardInfo = document.createElement('div');
      cardInfo.classList.add('card-info');
  
      const title = document.createElement('h3');
      title.textContent = image.tags;
  
      const details = document.createElement('p');
      details.textContent = `Likes: ${image.likes} | Views: ${image.views} | Comments: ${image.comments} | Downloads: ${image.downloads}`;
  
      cardInfo.appendChild(title);
      cardInfo.appendChild(details);
  
      card.appendChild(a);
      card.appendChild(cardInfo);
  
      galleryContainer.appendChild(card);
      lightbox.refresh();
      loadMoreBtn.style.display = 'block';
    });
  }