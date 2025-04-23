// وظائف النافذة المنبثقة للنموذج ثلاثي الأبعاد للابتوب
function open3DModel() {
    const modal = document.getElementById('model3dModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // منع التمرير في الصفحة الرئيسية
}

function closeModal() {
    const modal = document.getElementById('model3dModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // إعادة تمكين التمرير
}

// وظائف النافذة المنبثقة للنموذج ثلاثي الأبعاد للهاتف
function openPhoneModel() {
    const modal = document.getElementById('phoneModel3dModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // منع التمرير في الصفحة الرئيسية
}

function closePhoneModal() {
    const modal = document.getElementById('phoneModel3dModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // إعادة تمكين التمرير
}

// إغلاق النافذة المنبثقة عند النقر خارجها
window.onclick = function(event) {
    const laptopModal = document.getElementById('model3dModal');
    const phoneModal = document.getElementById('phoneModel3dModal');
    
    if (event.target === laptopModal) {
        closeModal();
    }
    
    if (event.target === phoneModal) {
        closePhoneModal();
    }
};

// إغلاق النافذة المنبثقة عند الضغط على زر ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closePhoneModal();
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل القائمة المتنقلة
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
            
            // تحريك أيقونة القائمة
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
    
    // تأثير تغيير لون الهيدر عند التمرير
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // تأثيرات التمرير للأقسام والمنتجات
    function handleScrollAnimations() {
        // تأثيرات للعناصر العامة
        const fadeElements = document.querySelectorAll('.fade-in, .slide-in');
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
        
        // تأثيرات لبطاقات المنتجات والمميزات
        const cardElements = document.querySelectorAll('.product-card, .feature-card, .category-card');
        cardElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    }
    
    // تشغيل التأثيرات عند التمرير
    window.addEventListener('scroll', handleScrollAnimations);
    
    // تشغيل التأثيرات عند تحميل الصفحة
    handleScrollAnimations();
    
    // تأثيرات عند تحويم الماوس على المنتجات
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productImage = card.querySelector('.product-image img') || card.querySelector('.product-img img');
        if (productImage) {
            card.addEventListener('mouseenter', function() {
                productImage.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', function() {
                productImage.style.transform = '';
            });
        }
    });
    
    // تحريك أزرار إضافة للسلة
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    if (addToCartButtons.length > 0 && cartCount) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                // تحريك الزر
                this.classList.add('clicked');
                const originalText = this.textContent;
                this.textContent = 'تمت الإضافة ✓';
                
                // تحديث عدد العناصر في السلة
                count++;
                cartCount.textContent = count;
                
                // تحريك أيقونة السلة
                const cartIcon = document.querySelector('.cart-icon');
                if (cartIcon) {
                    cartIcon.classList.add('pulse');
                }
                
                // إعادة الزر لحالته الأصلية بعد ثانيتين
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('clicked');
                    if (cartIcon) {
                        cartIcon.classList.remove('pulse');
                    }
                }, 2000);
            });
        });
    }
    
    // تمرير سلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // معالجة نموذج النشرة الإخبارية
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // إظهار رسالة نجاح
                const formContainer = this.parentElement;
                formContainer.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>تم الاشتراك بنجاح!</h3><p>شكراً لاشتراكك في نشرتنا الإخبارية</p></div>';
            }
        });
    }
});
