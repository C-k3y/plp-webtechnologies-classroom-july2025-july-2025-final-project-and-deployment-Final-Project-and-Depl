// main.js - small helpers: nav toggle, year fill, form validation, reveal on scroll
const nav = btn.nextElementSibling;
btn.addEventListener('click', ()=>{
const expanded = btn.getAttribute('aria-expanded') === 'true';
btn.setAttribute('aria-expanded', String(!expanded));
nav.style.display = expanded ? '' : 'flex';
});
});
}


// Year filler
function fillYears(){
document.querySelectorAll('[id^=year]').forEach(el => el.textContent = new Date().getFullYear());
}


// Simple reveal on scroll
function setupReveal(){
const items = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting) e.target.classList.add('visible');
});
},{threshold:0.12});
items.forEach(i=>io.observe(i));
}


// Contact form validation + pretend send
function initContactForm(){
const form = document.getElementById('contactForm');
if(!form) return;
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = form.name.value.trim();
const email = form.email.value.trim();
const message = form.message.value.trim();
// basic validation
let ok = true;
if(name.length < 2){ form.name.classList.add('error'); ok=false; } else form.name.classList.remove('error');
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ form.email.classList.add('error'); ok=false; } else form.email.classList.remove('error');
if(message.length < 10){ form.message.classList.add('error'); ok=false; } else form.message.classList.remove('error');
if(!ok){ msg.textContent = 'Please fix the errors above and try again.'; return; }
// pretend send
msg.textContent = 'Sending...';
setTimeout(()=>{
msg.textContent = 'Thanks — your message was (pretend) sent!';
form.reset();
},700);
});
}


// initialize common features
document.addEventListener('DOMContentLoaded', ()=>{
initNav(); fillYears(); setupReveal(); initContactForm();
// render posts if needed
if(window.renderPostsList) window.renderPostsList();
if(window.renderPostById) window.renderPostById();
});


// expose setupReveal so posts.js can call it after injecting content
window.setupReveal = setupReveal;
})();
