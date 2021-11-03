function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');
   
   
   function onClick() {
      const input = document.querySelector('#searchField').value.toLocaleLowerCase();
      
      for ( const row of rows ){
         if(row.textContent.toLocaleLowerCase().includes(input) && input != ''){
            row.setAttribute('class' , 'select');
         }else{
            row.removeAttribute('class');
         }
         console.log(row);
      }
   }
}