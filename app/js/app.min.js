document.addEventListener("DOMContentLoaded", () => {
    // font-weight hover
    document.querySelectorAll('.text-hover').forEach(link => {
        const text = link.textContent.trim(); // Отримуємо текст із посилання
        link.innerHTML = `<span>${text}</span><span>${text}</span>`; // Замінюємо текст на два <span>
    });

    // header menu
    document.querySelector('.main-header .header__burger').addEventListener('click', () => {
        document.querySelector('.menu').classList.add('active')
        document.querySelector('body').classList.add('scroll')
    })
    document.querySelector('.menu .header__burger').addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('active')
        document.querySelector('body').classList.remove('scroll')
    })

    // hero video
    setTimeout(function () {
        document.querySelector('.hero__bg img').style.display = 'none'
    }, 2000)

    function iframeFullWidth(iframeSelector) {
        if (window.innerWidth/window.innerHeight >= 16/9) {
            document.querySelector(iframeSelector).style.height = `${window.innerWidth*9/16}px`
            document.querySelector(iframeSelector).style.width = `100%`
        } else {
            document.querySelector(iframeSelector).style.width = `${window.innerHeight*16/9}px`
            document.querySelector(iframeSelector).style.height = `100%`
        }
    }

    iframeFullWidth('.hero iframe')

    window.addEventListener('resize', () => {iframeFullWidth('.hero iframe')})


    // stroke init
    const strokeElements = document.querySelectorAll(".info__stroke");
    strokeElements.forEach(strokeElement => {
        const spanElement = strokeElement.querySelector("span");
        if (spanElement) {
            for (let i = 0; i < 2; i++) {
                const clonedSpan = spanElement.cloneNode(true);
                strokeElement.appendChild(clonedSpan);
            }
        }
    });
    function strokeInit() {
        const strokeContWidth = document.querySelector('.info .container').clientWidth
        const strokeContPaddingRight = window.getComputedStyle(document.querySelector('.info .container')).paddingRight
        const windowWidth = window.innerWidth
        const strokeRight = (windowWidth-strokeContWidth)/2

        document.querySelector('.info .info__stroke-cont').style.right = `-${strokeRight+Number(strokeContPaddingRight.slice(0, -2))}px`;
    }
    strokeInit()
    window.addEventListener('resize', strokeInit)


    // fade-in animation
    function fadeIn(item) {
        const elements = document.querySelectorAll(item);
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            const scrollTop = window.pageYOffset;

            if (window.innerWidth > 999) {
                if (scrollTop >= elementTop - windowHeight + 200) {
                    element.classList.add('fade-out');
                }
            } else {
                if (scrollTop >= elementTop - windowHeight + 50) {
                    element.classList.add('fade-out');
                }
            }
        });
    }
    window.addEventListener('scroll', () => fadeIn('.fade-in'));
    window.addEventListener('resize', () => fadeIn('.fade-in'));
    document.querySelectorAll('.hero .fade-in').forEach(function (item) {
        item.classList.add('fade-out')
    })
    fadeIn('.fade-in')


    // hero scroll animation
    gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "100%",
            pin: true,
            pinSpacing: false
        });
    });

});
