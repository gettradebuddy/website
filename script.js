document.querySelectorAll('a.disabled').forEach((link)=>{
  link.addEventListener('click',(event)=>event.preventDefault());
});

const deletionForm = document.querySelector('[data-delete-form]');
if (deletionForm) {
  deletionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('[data-delete-status]');
    message.textContent = 'If an account exists for this email, we will send instructions to confirm your deletion request.';
    deletionForm.reset();
  });
}
