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
