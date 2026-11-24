// Visually matched: A62, Burberry Her Eau de Toilette, 100 ml.
// The warehouse image stays available; the borrowed studio image is labeled.
const baseCard=card, basePhoto=photo;
card=p=>p.code==='A62'?baseCard(p).replace('src="images/A62.webp"','src="images/A62-reference.png"').replace('<div class="sku">','<p class="stock">Imagen de referencia · LA Primesource</p><div class="sku">'):baseCard(p);
const sourceSwitch=document.createElement('button');sourceSwitch.id='sourceSwitch';sourceSwitch.textContent='Ver foto del almacén';$('photoModal').append(sourceSwitch);
let currentPhotoCode=null,referenceShowing=false;
function showMatchedPhoto(isReference){referenceShowing=isReference;$('largePhoto').src=isReference?'images/A62-reference.png':'images/A62.webp';$('photoLabel').textContent=isReference?'REFERENCIA · LA PRIMESOURCE':text('FOTO DEL ALMACÉN','WAREHOUSE PHOTO');sourceSwitch.textContent=isReference?text('Ver foto del almacén','View warehouse photo'):text('Ver imagen de referencia','View reference image')}
photo=code=>{currentPhotoCode=code;basePhoto(code);sourceSwitch.hidden=code!=='A62';if(code==='A62')showMatchedPhoto(true)};
sourceSwitch.onclick=()=>{if(currentPhotoCode==='A62')showMatchedPhoto(!referenceShowing)};
renderProducts();
