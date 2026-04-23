window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
}

const menuData = {
  mains: [
    { name: 'Braaied Beef Chops', desc: 'Juicy beef chops marinated and flame grilled to perfection', price: 'R120' },
    { name: 'Boerewors Platter', desc: 'Traditional South African boerewors served with pap and chakalaka', price: 'R95' },
    { name: 'Braaied Chicken', desc: 'Half chicken marinated in our signature spice blend and fire grilled', price: 'R110' },
    { name: 'Lamb Chops', desc: 'Tender lamb chops seasoned and braaied over real flames', price: 'R150' },
    { name: 'Mixed Braai Platter', desc: 'A generous mix of beef, chicken and boerewors for two', price: 'R220' },
    { name: 'Pork Rashers', desc: 'Succulent pork rashers glazed and grilled over the fire', price: 'R100' }
  ],
  sides: [
    { name: 'Pap & Chakalaka', desc: 'Smooth pap served with spicy chakalaka relish', price: 'R35' },
    { name: 'Pap & Gravy', desc: 'Creamy pap with rich meat gravy', price: 'R35' },
    { name: 'Coleslaw', desc: 'Fresh homemade creamy coleslaw', price: 'R25' },
    { name: 'Grilled Mielies', desc: 'Whole corn on the cob grilled over the fire', price: 'R20' },
    { name: 'Garlic Bread', desc: 'Toasted garlic bread straight from the grill', price: 'R25' },
    { name: 'Chakalaka', desc: 'Our signature spicy vegetable relish', price: 'R20' }
  ],
  drinks: [
    { name: 'Cold Drinks', desc: 'Coca Cola, Fanta, Sprite, Stoney — served ice cold', price: 'R20' },
    { name: 'Fruit Juice', desc: 'Orange, apple or guava juice', price: 'R22' },
    { name: 'Water', desc: 'Still or sparkling', price: 'R15' },
    { name: 'Mahewu', desc: 'Traditional South African fermented maize drink', price: 'R18' },
    { name: 'Rooibos Tea', desc: 'Hot or cold rooibos — proudly South African', price: 'R18' },
    { name: 'Coffee', desc: 'Filter coffee or instant — served hot anytime', price: 'R20' }
  ]
};

function showCategory(category) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const grid = document.getElementById('menu-grid');
  grid.innerHTML = menuData[category].map(item => `
    <div class="menu-item">
      <div class="menu-item-info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>
      <div class="menu-item-price">${item.price}</div>
    </div>
  `).join('');
}

showCategory('mains');