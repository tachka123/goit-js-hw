const API_KEY = "14125150-f318113a737f32f93c3727cb2";

export default async function(findElem, pageNum = 1){
  const requestData = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${findElem}&page=${pageNum}&per_page=12&key=${API_KEY}`).then(result => result.json());
  return requestData.hits
}
