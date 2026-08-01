function abrirCarta(){
  if(document.getElementById('password').value==='24Noviembre'){
    
    login.style.opacity='0';
    
    setTimeout(()=>{
      login.style.display='none';
      carta.style.display='block';
      carta.style.opacity='0';
      carta.style.transform='scale(.8)';

      setTimeout(()=>{
        carta.style.opacity='1';
        carta.style.transform='scale(1)';
      },100);

    },500);

  }else{
    error.textContent='Contraseña incorrecta';
  }
}
function crearPetalos(){
  setInterval(()=>{
    let petalo=document.createElement("div");
    petalo.className="petalo";
    petalo.innerHTML="🌹";
    petalo.style.left=Math.random()*100+"vw";
    petalo.style.animationDuration=(5+Math.random()*5)+"s";
    document.body.appendChild(petalo);

    setTimeout(()=>{
      petalo.remove();
    },9000);

  },500);
}
