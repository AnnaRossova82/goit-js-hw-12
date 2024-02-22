import axios from "axios";

export async function fetchImages(searchTerm, currentPage, perPage) {
  const apiKey = '42441729-7dc314f47a8382b16bbe5b871';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Error fetching images:', error);
  }
}

