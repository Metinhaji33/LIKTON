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
// در فایل themes/script.js

// در فایل themes/script.js

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    // --- بخش ۱: تعیین کلاس‌های کارت ---
    let cardClasses = 'product-card';
    if (product.isFeatured) {
        cardClasses += ' animated-rgb-border';
    }

    // --- بخش ۲: ساختن HTML برچسب (کد جدید) ---
    let badgeHTML = ''; // یک متغیر خالی برای کد HTML برچسب
    // اگر محصول ویژگی badgeText را داشت...
    if (product.badgeText) {
        // ...کد HTML برچسب را با متن مربوطه بساز
        badgeHTML = `<div class="product-badge">${product.badgeText}</div>`;
    }

    // --- بخش ۳: ساختن کارت نهایی ---
    const cardHTML = `
    <a href="${product.pageLink}">
        <div class="${cardClasses}">
            <div class="card-content">
                ${badgeHTML} <!-- کد برچسب اینجا اضافه می‌شود -->
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button>افزودن به سبد</button>
            </div>
        </div>
        </a>
    `;

    productGrid.innerHTML += cardHTML;
});


// id 
window.onload = function () {
    // مرحله ۱: دریافت پارامتر id از URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // مرحله ۲: پیدا کردن محصول در آرایه محصولات
    // با استفاده از `==` به جای `===` چون id از URL به صورت رشته است
    const product = products.find(p => p.id == productId);

    // مرحله ۳: نمایش اطلاعات در صفحه
    if (product) {
        // المنت‌های صفحه را پیدا می‌کنیم
        const productNameEl = document.getElementById('product-name');
        const productImageEl = document.getElementById('product-image');
        const productDescriptionEl = document.getElementById('product-description');
        const productPriceEl = document.getElementById('product-price');

        // اطلاعات محصول را در المنت‌ها قرار می‌دهیم
        productNameEl.textContent = product.name;
        productImageEl.src = product.image;
        productImageEl.alt = product.name;
        productDescriptionEl.textContent = product.description;
        productPriceEl.textContent = product.price + ' تومان';

        // عنوان صفحه را هم می‌توانیم تغییر دهیم
        document.title = 'LIKTON - ' + product.name;

    } else {
        // اگر محصولی با آن id پیدا نشد، یک پیغام خطا نمایش بده
        const articleEl = document.querySelector('.article');
        articleEl.innerHTML = '<h1>محصول مورد نظر یافت نشد!</h1>';
    }
};