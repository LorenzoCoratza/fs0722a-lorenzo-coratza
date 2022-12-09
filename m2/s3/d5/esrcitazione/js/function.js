
///CHIAMATA FETCH///
fetch("./js/users.json")
.then(response=> {
  if(response.status) {
  return response.json();
}})

///FUNZIONE ASINCRONA///
async function caricaJSON (url) {
  const res = await fetch(url);
  return await res.json();
}
 
///FUNZIONE E GENERAZIONE P COMPILATO CON DATI JSON///
caricaJSON ('./js/users.JSON').then(data => {
  let x = 0
  let cardText = document.querySelectorAll('.card-body')
  let cardImg = document.querySelectorAll('.imgs')
  for (let dato of data) {
      let nomeCompleto = dato.firstName + ' ' + dato.lastName
      let cardP = document.createElement('p')
      cardP.innerText = nomeCompleto
      cardP.style.fontSize = '2rem'
      cardText[x].appendChild(cardP)

      let mail = dato.email
      let cardMail = document.createElement('p')
      cardMail.innerText = mail
      cardMail.style.color='#fffd00';
      cardMail.style.fontSize='1.2rem'
      cardText[x].appendChild(cardMail)

      x++
       
      ///formula sbagliata   "sperimentaale"///
      /* let cardImg = document.querySelectorAll('.img.fluid')
      cardImg[x].innerHTML(`<img  id="img2" src="imgs/female.png" class="img-fluid w-25 center rounded-circle bg-secondary   " alt="profilePic">`)
       cardImg[x].setAttribute('src', dato.profileURL')
      */
    
  }
});