const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    sideMenu.classList.toggle('open');

    if (sideMenu.classList.contains('open')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

hamburgerBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// cards

// پیدا کردن ظرف اصلی گرید در HTML
const productGrid = document.querySelector('.product-grid');

// حلقه زدن روی لیست محصولات و ساختن کارت برای هر کدام
products.forEach(product => {
    // ساختن یک کارت محصول جدید با استفاده از داده‌ها
    const cardHTML = `
        <div class="product-card">
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button>افزودن به سبد</button>
        </div>
    `;

    // اضافه کردن کارت ساخته شده به ظرف اصلی در HTML
    productGrid.innerHTML += cardHTML;
});