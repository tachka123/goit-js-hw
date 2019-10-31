import pixabay from './pixabayAPI';
import templateItem from '../template/photoItem.hbs';

const searchForm = document.getElementById('search-form');
const input = searchForm.querySelector('input');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loading');
const loadMore = document.querySelector('.load_more');
const loadMoreBtn = loadMore.querySelector('button');

let pageForLoadMore = 1;
let currentSearch = '';

async function formEvent(e) {
  loading.style.display = 'flex';
  e.preventDefault();
  const inputValue = input.value;
  currentSearch = input.value;
  const fetchedResult = await pixabay(inputValue).then(result => result);
  gallery.innerHTML = await makeTemplate(fetchedResult);
  loading.style.display = 'none';
  loadMore.style.display = 'flex';
  pageForLoadMore = 1;
}

export default function() {
  searchForm.addEventListener('submit', formEvent);
  loadMoreBtn.addEventListener('click', loadMoreEvent);
}

function makeTemplate(items) {
  return items.reduce((acc, item) => (acc += templateItem(item)), '');
}
function countItemToScroll() {
  return 12 * (pageForLoadMore - 1);
}
async function loadMoreEvent(e) {
  e.preventDefault();
  pageForLoadMore++;
  const fetchedResult = await pixabay(currentSearch, pageForLoadMore).then(
    result => result,
  );
  await gallery.insertAdjacentHTML('beforeend', makeTemplate(fetchedResult));
  const itemToScroll = gallery.querySelectorAll('.photo-card')[
    countItemToScroll()
  ];
  window.scrollTo({
    top: itemToScroll.offsetTop,
    behavior: 'smooth',
  });
}
