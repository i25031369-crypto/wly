(function() {
    var bannerList = document.querySelector('.banner-list');
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next');
    var dots = document.querySelectorAll('.dots span');

    if (bannerList) {
        var index = 0;
        var len = document.querySelectorAll('.banner-list img').length;

        function changeBanner() {
            bannerList.style.transform = 'translateX(-' + (index * 100) + '%)';
            for (var i = 0; i < dots.length; i++) {
                dots[i].className = i === index ? 'active' : '';
            }
        }

        if (prevBtn) {
            prevBtn.onclick = function() {
                index = index === 0 ? len - 1 : index - 1;
                changeBanner();
            };
        }

        if (nextBtn) {
            nextBtn.onclick = function() {
                index = index === len - 1 ? 0 : index + 1;
                changeBanner();
            };
        }

        for (var d = 0; d < dots.length; d++) {
            (function(i) {
                dots[i].onclick = function() {
                    index = i;
                    changeBanner();
                };
            })(d);
        }

        var timer = setInterval(function() {
            if (nextBtn) nextBtn.click();
        }, 3500);

        var banner = document.querySelector('.banner');
        if (banner) {
            banner.onmouseover = function() { clearInterval(timer); };
            banner.onmouseout = function() {
                timer = setInterval(function() {
                    if (nextBtn) nextBtn.click();
                }, 3500);
            };
        }
    }

    function animateOnScroll() {
        var els = document.querySelectorAll('.lvxing tr, .meishi td, .aihaol li, .stats-row td, .intro-box, .accordion-item, .landmark-detail-card, .folk-detail');
        for (var i = 0; i < els.length; i++) {
            var rect = els[i].getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                els[i].style.opacity = '1';
                els[i].style.transform = 'translateY(0)';
            }
        }
    }

    var animEls = document.querySelectorAll('.lvxing tr, .meishi td, .aihaol li, .stats-row td, .intro-box, .accordion-item, .landmark-detail-card, .folk-detail');
    for (var j = 0; j < animEls.length; j++) {
        animEls[j].style.opacity = '0';
        animEls[j].style.transform = 'translateY(30px)';
        animEls[j].style.transition = 'all 0.6s ease';
    }

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    var cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', function(e) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
            if (!cursorGlow.classList.contains('visible')) {
                cursorGlow.classList.add('visible');
            }
        });
        document.addEventListener('mouseleave', function() {
            cursorGlow.classList.remove('visible');
        });
    }

    var accItems = document.querySelectorAll('.accordion-item');
    for (var a = 0; a < accItems.length; a++) {
        (function(item) {
            var header = item.querySelector('.accordion-header');
            var content = item.querySelector('.accordion-content');
            if (!header || !content) return;

            header.addEventListener('click', function() {
                var parentGroup = item.parentElement;
                var siblings = parentGroup.querySelectorAll('.accordion-item');
                var isAlreadyActive = item.classList.contains('active');

                for (var s = 0; s < siblings.length; s++) {
                    siblings[s].classList.remove('active');
                    var sibContent = siblings[s].querySelector('.accordion-content');
                    if (sibContent) sibContent.style.maxHeight = '0';
                }

                if (!isAlreadyActive) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        })(accItems[a]);
    }

    var welcomePage = document.querySelector('.welcome-page');
    if (welcomePage) {
        var particles = document.querySelector('.welcome-particles');
        if (particles) {
            for (var p = 0; p < 30; p++) {
                var span = document.createElement('span');
                span.style.left = Math.random() * 100 + '%';
                span.style.animationDuration = (Math.random() * 6 + 5) + 's';
                span.style.animationDelay = (Math.random() * 8) + 's';
                span.style.width = (Math.random() * 4 + 2) + 'px';
                span.style.height = span.style.width;
                span.style.opacity = Math.random() * 0.5 + 0.2;
                particles.appendChild(span);
            }
        }
    }
})();
