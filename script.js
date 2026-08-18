document.addEventListener('DOMContentLoaded',function(){
  // Set current year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // Simple contact form placeholder handler
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      alert('Thanks! Replace this handler with real submission code (email/API).');
      form.reset();
    });
  }
});
