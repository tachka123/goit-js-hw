import * as basicLightbox from 'basiclightbox'

export default function(){
  const gallery = document.querySelector('.gallery');
  gallery.addEventListener('click',(e) =>{
    if(e.target.tagName === "IMG"){
      createModalAndShow(e.target.dataset.large)
    }
  })

}
async function createModalAndShow(src){
  const instance = await basicLightbox.create(`
<img src='${src}'>
`)
instance.show()
}
