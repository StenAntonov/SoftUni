function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = Array.from(formElements).slice(0, formElements.length -1);
    const onScreenBtn =  Array.from(formElements).slice(formElements.length -1)[0].addEventListener('click', createMovie);
    const moviesUl = document.querySelector('#movies>ul');
    const archiveUl = document.querySelector('#archive>ul');
    moviesUl.innerHTML = "";
    archiveUl.innerHTML = "";
    const clearBtn = document.querySelector('#archive>button').addEventListener('click', clear);

    function createMovie(e) {
        e.preventDefault();

        const name = inputs[0].value;
        const hall = inputs[1].value;
        const ticketPrice = Number(inputs[2].value);
        
        if(!name || !hall || !ticketPrice) {
            return;
        };

        
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);
        
        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(strong);
        
        const div = document.createElement('div');
        
        const innerStrong = document.createElement('strong');
        innerStrong.textContent = ticketPrice.toFixed(2);
        div.appendChild(innerStrong);
        
        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');
        div.appendChild(input);
        
        const archieveBtn = document.createElement('button');
        archieveBtn.textContent = 'Archive';
        archieveBtn.addEventListener('click', archive);
        div.appendChild(archieveBtn);
        
        li.appendChild(div);
        
        moviesUl.appendChild(li);
        
        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';
    };

    function archive(e) {
        
        const li = e.target.parentNode.parentNode;
        const div = e.target.parentNode;
        const ticketsSold = div.children[1].value;
        const resultLi = document.createElement('li');
        
        if(!Number(ticketsSold)){
            return;
        }

        const span = document.createElement('span');
        const name = li.children[0].textContent;
        span.textContent = name;
        resultLi.appendChild(span);

        const strong = document.createElement('strong');
        const price = Number(div.children[0].textContent);
        const totalPrice = price * Number(ticketsSold);
        strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
        resultLi.appendChild(strong);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => e.target.parentNode.remove());
        resultLi.appendChild(deleteBtn);

        archiveUl.appendChild(resultLi);
        li.remove();
    }

    function clear() {
        archiveUl.innerHTML = "";
    }
};