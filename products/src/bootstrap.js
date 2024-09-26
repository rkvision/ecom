import faker from "faker";



const mount = (el) => {
    let products = '';
    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    // document.querySelector('#dev-products').innerHTML = products;
    el.innerHTML = products;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which EFNITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if(process.env.NODE_ENV === 'development') {
    
    const el = document.querySelector('#dev-products');
    // Assuming our container app does not have element #dev-products
    if(el) {
        // We are proballely runnig in isolation
        mount(el);
    }
}
// Context/Situation #2
// We re running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an if of  'dev-products'
// WE DO NOT WANT try to immediately render the app
export { mount }