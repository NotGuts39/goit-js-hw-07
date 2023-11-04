const categories = document.querySelector('#categories')

const items = categories.querySelectorAll('li.item')


console.log(items.length)

items.forEach(item => {

    const head = item.querySelector('h2');

    const li = item.querySelectorAll('ul > li');

    console.log(head.textContent)
    console.log(li.length)
})













// items.forEach(item => {

//     const head = item.querySelector('h2');

//     if (head) {
//         console.log(head.textContent);
//     }
// });




// items.forEach(item => {

//      const ul = item.querySelector('ul');
    
     
//     if (ul) {
        
//         const li = ul.querySelectorAll('li');
//         console.log(li.length)
//     }
    
// });


 