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
    // --- این بخش را اصلاح کن ---
    const cardHTML = `
        <div class="product-card">
            <div class="card-content">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button>افزودن به سبد</button>
            </div>
        </div>
    `;

    // اضافه کردن کارت ساخته شده به ظرف اصلی در HTML
    productGrid.innerHTML += cardHTML;
});