import faker from 'faker'


const mount = (el) => {
    const items = faker.random.number();
    const cartMessage = `<div>You have ${items} in your cart.</div>`
    // document.querySelector('#cart-dev').innerHTML = cartMessage;
    el.innerHTML = cartMessage;
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which EFNITELY has an element with an id of 'cart-dev'
// We want to immediately render our app into that element
if(process.env.NODE_ENV === 'development') {
    
    const el = document.querySelector('#cart-dev');
    // Assuming our container app does not have element #dev-products
    if(el) {
        // We are proballely runnig in isolation
        mount(el);
    }
}
// Context/Situation #2
// We re running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an if of  'cart-dev'
// WE DO NOT WANT try to immediately render the app
export { mount }