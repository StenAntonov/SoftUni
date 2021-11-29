function validate() {
   const div = document.getElementById('wrapper');
   const username = document.getElementById('username');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const confirmPassword = document.getElementById('confirm-password');
   const companyCheck = document.getElementById('company');
   const companyField = document.getElementById('companyInfo');
   const userPattern = /[A-Za-z0-9]{3,20}/gm;
   const emailPattern = /[\w+]+@[\w]+\.[\w]+/gm;
   const form = document.getElementById('registerForm');

   companyCheck.addEventListener('change', () => {
      if (companyCheck.checked) {
         companyField.style.display = 'block';
      } else {
         companyField.style.display = 'none';
      };
   });
   
   form.addEventListener('submit', (e) => {
      e.preventDefault();


      if (!userPattern.test(username.value)) {
         username.style.borderColor = 'red';
      } else {
         username.style.border = 'none';
      };

      if (!emailPattern.test(email.value)) {
         email.style.borderColor = 'red';
      } else {
         email.style.border = 'none';
      };

      if (password.value != confirmPassword.value) {
         password.style.borderColor = 'red';
         confirmPassword.style.borderColor = 'red';
      } else {
         password.style.borderColor = 'none';
         confirmPassword.style.borderColor = 'none';
      };
   });
};

