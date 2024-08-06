function visibilyControlForm(formLogin, formRegister){
  if (formRegister.classList.contains('hidden')) {
      formRegister.classList.remove('hidden');
      formLogin.classList.add('hidden');
      landscape.style.backgroundImage = "url('https://64.media.tumblr.com/a30eec0be84386a72cb209d5b334b6fa/tumblr_njoi6z1AQ71qglxwvo1_640.gifv')";
  } else {
      formRegister.classList.add('hidden');
      formLogin.classList.remove('hidden');
      landscape.style.backgroundImage = "url('https://64.media.tumblr.com/7b91dc6ab574716d90701330a5a15bf7/tumblr_n70y28KAbQ1qglxwvo1_500.gifv')";
      
  }
}

function visibilityControlButon(btnOpen, btnRegister){
  if (btnOpen.classList.contains('btn-active')) {
      btnOpen.classList.remove('btn-active');
      btnRegister.classList.add('btn-active');
  } else {
      btnOpen.classList.add('btn-active');
      btnRegister.classList.remove('btn-active');
  }
}

function transitionForm() {
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const landscape = document.getElementById('landscape');

  const btnOpen = document.getElementById('btn-open');
  const btnRegister = document.getElementById('btn-register');

  visibilyControlForm(formLogin, formRegister);
  visibilityControlButon(btnOpen, btnRegister);
}