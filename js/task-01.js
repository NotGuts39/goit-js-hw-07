const categories = document.querySelector('#categories')

const items = categories.querySelectorAll('li.item')


console.log('Number of categories: ' + items.length)

items.forEach(item => {

    const head = item.querySelector('h2');

    const li = item.querySelectorAll('ul > li');

    console.log('Category: ' + head.textContent)
    console.log('Elements: ' + li.length)
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


 