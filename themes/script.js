// ==============================================================
//  کدهای مشترک که در همه صفحات اجرا می‌شوند
// ==============================================================

document.addEventListener('DOMContentLoaded', function () {
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


    // ==============================================================
    //  کدهای مخصوص صفحه اصلی (نمایش گرید محصولات)
    // ==============================================================

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

            const dynamicLink = `/product.html?id=${product.id}`;

            const cardHTML = `
                <a href="${dynamicLink}" class="product-card-link">
                    <div class="${cardClasses}">
                        <div class="card-content">
                            ${badgeHTML}
                            <img src="${product.imageUrl}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p class="price">${product.price}</p>
                            
                            <!-- 
                                این خط اصلاح شد تا با نام کلاس در CSS شما هماهنگ شود 
                            -->
                            <div class="card-content-button">افزودن به سبد</div>
                        </div>
                    </div>
                </a>
            `;
            productGrid.innerHTML += cardHTML;
        });
    }


    // ==============================================================
    //  کدهای مخصوص صفحه تک محصول
    // ==============================================================

    if (document.getElementById('product-name')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (!productId) {
            document.querySelector('.article').innerHTML = '<h1>خطا: آدرس صفحه ناقص است.</h1>';
            return;
        }

        const product = products.find(p => p.id == productId);

        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.imageUrl;
            document.getElementById('product-image').alt = product.name;

            const descriptionEl = document.getElementById('product-description');
            if (descriptionEl && product.description) {
                descriptionEl.textContent = product.description;
            }

            document.getElementById('product-price').textContent = product.price;
            document.title = 'LIKTON - ' + product.name;
        } else {
            document.querySelector('.article').innerHTML = '<h1>محصول مورد نظر یافت نشد!</h1>';
        }
    }
});
