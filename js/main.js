document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if(toggle){
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      if(navLinks.classList.contains('open')){
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
      } else {
        navLinks.style.display = '';
      }
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
  document.querySelectorAll('.accordion-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const content = btn.nextElementSibling;
      btn.classList.toggle('is-open');
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = loginForm.querySelector('[name="email"]').value.trim();
      const pass = loginForm.querySelector('[name="password"]').value.trim();
      const msg = document.getElementById('loginMsg');
      if(!email || !pass){
        msg.innerHTML = '<div class="error-msg">Please enter email and password.</div>';
        return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        msg.innerHTML = '<div class="error-msg">Please enter a valid email address.</div>';
        return;
      }
      msg.innerHTML = '<div class="success-msg">Login Successful — redirecting to Home...</div>';
      setTimeout(()=>{ window.location.href = 'index.html'; }, 1200);
    });
  }
  const signupForm = document.getElementById('signupForm');
  if(signupForm){
    signupForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = signupForm.querySelector('[name="name"]').value.trim();
      const email = signupForm.querySelector('[name="email"]').value.trim();
      const pass = signupForm.querySelector('[name="password"]').value.trim();
      const pass2 = signupForm.querySelector('[name="password2"]').value.trim();
      const msg = document.getElementById('signupMsg');
      if(!name || !email || !pass || !pass2){
        msg.innerHTML = '<div class="error-msg">Please fill all fields.</div>';
        return;
      }
      if(pass.length < 6){
        msg.innerHTML = '<div class="error-msg">Password must be at least 6 characters.</div>';
        return;
      }
      if(pass !== pass2){
        msg.innerHTML = '<div class="error-msg">Passwords do not match.</div>';
        return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        msg.innerHTML = '<div class="error-msg">Please enter a valid email address.</div>';
        return;
      }
      msg.innerHTML = '<div class="success-msg">Account Created — redirecting to Login...</div>';
      setTimeout(()=>{ window.location.href = 'login.html'; }, 1200);
    });
  }
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();
      if(!name || !email || !message){
        alert('Please fill in all fields before submitting.');
        return false;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Please enter a valid email address.');
        return false;
      }
      alert('Thanks — your message was captured (no backend in this demo).');
      contactForm.reset();
      return true;
    });
  }
});