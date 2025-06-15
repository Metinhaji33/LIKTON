
// --- منطق منوی همبرگری ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

if (hamburgerBtn && sideMenu && overlay) {
    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        sideMenu.classList.toggle('open');
        overlay.style.display = sideMenu.classList.contains('open') ? 'block' : 'none';
    }
    hamburgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

// --- کدهای مخصوص صفحه اصلی (نمایش گرید محصولات) ---
const productGrid = document.querySelector('.product-grid');
if (productGrid) {
    products.forEach(product => {
        let cardClasses = 'product-card';
        if (product.isFeatured) {
            cardClasses += ' animated-rgb-border';
        }
        let badgeHTML = '';
        if (product.badgeText) {
            badgeHTML = `<div class="product-badge">${product.badgeText}</div>`;
        }
        const dynamicLink = `product.html?id=${product.id}`;
        const cardHTML = `
            <a href="${dynamicLink}" class="product-card-link">
                <div class="${cardClasses}">
                    <div class="card-content">
                        ${badgeHTML}
                        <img src="${product.imageUrl}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        <div class="card-content-button">مشاهده جزئیات</div>
                    </div>
                </div>
            </a>
        `;
        productGrid.innerHTML += cardHTML;
    });
}

// --- کدهای مخصوص صفحه تک محصول ---
const productNameEl = document.getElementById('product-name');
if (productNameEl) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        productNameEl.textContent = 'خطا: محصولی انتخاب نشده است.';
    } else {
        const product = products.find(p => p.id == productId);
        if (product) {
            productNameEl.textContent = product.name;
            document.getElementById('product-image').src = product.imageUrl;
            document.getElementById('product-image').alt = product.name;
            document.getElementById('product-price').textContent = product.price;
            document.title = 'LIKTON - ' + product.name;

            const productDescriptionEl = document.getElementById('product-description');
            if (product.description) {
                productDescriptionEl.textContent = product.description;
            }
        } else {
            productNameEl.textContent = 'محصول مورد نظر یافت نشد!';
        }
    }
}
