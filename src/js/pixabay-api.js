import axios from 'axios';

const getArr = async (userParam, page) => {
  const searchParams = new URLSearchParams({
    key: '44069971-389e858559c4e5db378aa29c5',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });

  return await axios.get(`https://pixabay.com/api/?${searchParams}`);
};

export default getArr;
