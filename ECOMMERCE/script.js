const products = [
    {name: 'The Ember Armchair', desc: 'Soft leather comfort', price: 250, old: 300, img: 'https://images.unsplash.com/photo-1582582494700-1a64e5915f1a'},
    {name: 'Willow Driftwood Table', desc: 'Rustic wooden elegance', price: 420, old: 500, img: 'https://images.unsplash.com/photo-1567016546240-02e1b1b1cb16'},
    {name: 'Aurora Wall Frame', desc: 'Minimal art frame', price: 60, old: null, img: 'https://images.unsplash.com/photo-1582582494890-53e8ee3823b9'},
    {name: 'The Loft Bedstead', desc: 'Modern wood frame', price: 700, old: 850, img: 'https://images.unsplash.com/photo-1625838175923-47c90553aa8b'},
    {name: 'Marble Vista Coffee Table', desc: 'White marble top', price: 310, old: null, img: 'https://images.unsplash.com/photo-1602524810669-5d8f3db8c392'},
    {name: 'Eclipse Mirror', desc: 'Round gold finish', price: 150, old: 200, img: 'https://images.unsplash.com/photo-1621939514649-4e0d65a3d0c7'},
    {name: 'Haven Sofa', desc: 'Three-seater luxury', price: 580, old: 650, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7'},
    {name: 'Noir Chandelier', desc: 'Elegant matte finish', price: 400, old: null, img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5'},
    {name: 'Rustic Oak Shelf', desc: 'Multi-tier design', price: 180, old: 220, img: 'https://images.unsplash.com/photo-1602524810814-1f82f826ff46'},
    {name: 'Velvet Dune Pouf', desc: 'Cozy round stool', price: 95, old: null, img: 'https://images.unsplash.com/photo-1598300183641-d8ed2f73ee3d'},
    {name: 'Sienna Wall Lamp', desc: 'Warm amber glow', price: 75, old: 90, img: 'https://images.unsplash.com/photo-1616628182507-6dd948adbb88'},
    {name: 'Cascade Bookshelf', desc: 'Asymmetrical form', price: 260, old: 300, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'},
    {name: 'Terra Dining Set', desc: 'Wood and glass fusion', price: 850, old: 1000, img: 'https://images.unsplash.com/photo-1616627457116-f9eec0bc7e30'},
    {name: 'Ivory Bench', desc: 'Cushioned comfort', price: 200, old: 230, img: 'https://images.unsplash.com/photo-1598300052800-7d59d0a43a3a'},
    {name: 'Obsidian Floor Lamp', desc: 'Matte black elegance', price: 130, old: null, img: 'https://images.unsplash.com/photo-1616628182385-9b8c17f8eaf2'}
];

const grid = document.getElementById('productGrid');
let cartCount = 0;
let favCount = 0;
let totalBill = 0;

products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="price-area">
        ${p.old ? `<span class='old-price'>$${p.old}</span>` : ''}
        <span class='price'>$${p.price}</span>
    </div>
    <div class="actions">
        <span class="fav">🤍</span>
        <div class="qty">
        <button class="minus">-</button>
        <span class="count">0</span>
        <button class="plus">+</button>
        </div>
        <button class="add-cart">Add</button>
    </div>
    `;
    grid.appendChild(card);

    const fav = card.querySelector('.fav');
    const addBtn = card.querySelector('.add-cart');
    const minus = card.querySelector('.minus');
    const plus = card.querySelector('.plus');
    const countEl = card.querySelector('.count');
    let count = 0;

    fav.addEventListener('click', () => {
    if (fav.textContent === '🤍') {
        fav.textContent = '❤️';
        favCount++;
    } else {
        fav.textContent = '🤍';
        favCount--;
    }
    document.querySelector('.fav-badge').textContent = favCount;
    });

    plus.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
    });

    minus.addEventListener('click', () => {
    if (count > 0) count--;
    countEl.textContent = count;
    });

    addBtn.addEventListener('click', () => {
    if (count > 0) {
        cartCount += count;
        totalBill += count * p.price;
        document.querySelector('.cart-badge').textContent = cartCount;
        alert(`${p.name} added to cart! Total Bill: $${totalBill}`);
    }
    });
});