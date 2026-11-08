
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault();
 const note=form.querySelector('.form-result');
 if(note) note.textContent='Thank you! This demo form is working on the front end. Connect it to a backend or email service to receive submissions.';
 form.reset();
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
