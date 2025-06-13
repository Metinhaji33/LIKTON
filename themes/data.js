// لیست داده‌های محصولات
const products = [
    {
        name: 'موس گیمینگ RGB Pro',
        price: '۱,۲۰۰,۰۰۰ تومان',
        imageUrl: 'images/mouse.png',
        isFeatured: true,
        // isFeatured: true,  برای بررسی حاشیه مخصوص است 
        // true: حاشیه مخصوص داشته باشد 
        // false : حاشیه مخصوص نداشته باشد
        badgeText: 'تخفیف ۹۰٪'
    },
    {
        name: 'کیبورد مکانیکال TKL',
        price: '۲,۵۰۰,۰۰۰ تومان',
        imageUrl: 'images/keyboard.png'
    },
    {
        name: 'هدست صدای فراگیر 7.1',
        price: '۳,۱۰۰,۰۰۰ تومان',
        imageUrl: 'images/headphone.png'
    },
    {
        name: 'مانیتور گیمینگ 144Hz',
        price: '۸,۰۰۰,۰۰۰ تومان',
        imageUrl: 'https://via.placeholder.com/250x150?text=Monitor'
    },
    {
        name: 'gg',
        price: '100',
        imageUrl: 'ufdb'
    }
    // برای اضافه کردن محصول جدید، فقط یک بلوک مثل بالا کپی کن
    // می توانی این لیست را تا ۱۲ محصول یا بیشتر ادامه دهی
];