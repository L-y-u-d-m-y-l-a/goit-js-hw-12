const getArr = userParam => {
  const searchParams = new URLSearchParams({
    key: '44069971-389e858559c4e5db378aa29c5',
    q: userParam,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export default getArr;
