if (document.documentElement.clientWidth > 768) {
    const animatedItems = document.querySelectorAll('.anim-item');

    if (animatedItems.length > 0) {
        window.addEventListener('scroll', animateOnScroll);
        function animateOnScroll() {
            for (let index = 0; index < animatedItems.length; index++) {
                const animItem = animatedItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 10;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('no-animtop')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, lef: rect.left + scrollLeft }
        }
        animateOnScroll();
    }
}
