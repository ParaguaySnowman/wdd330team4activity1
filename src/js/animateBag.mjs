// class=cart

document.getElementById('addToCart').addEventListener('click', function(){
    const cart = document.querySelector('.cart');
    cart.classList.add('shake');

    cart.addEventListener(animationed, function(){
        cart.classList.remove('shake');
    }, {once: true });
});