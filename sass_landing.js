    const navLink = document.querySelectorAll('.nav-link');
    const section = document.querySelectorAll('section');


    function scrollnav() {
        const nav = document.querySelector('.nav');
        const navLogo = document.querySelector('.nav-logo');

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            nav.classList.add('scroll-nav-bg')
            navLogo.classList.add('scroll-nav-font');
            navLink.forEach(el => el.classList.add('scroll-nav-font'));


        } else {
            nav.classList.remove('scroll-nav-bg');
            navLogo.classList.remove('scroll-nav-font');
            navLink.forEach(el => el.classList.remove('scroll-nav-font'));

        }
    }

    window.addEventListener('scroll', spyScroll);


    function spyScroll() {
        section.forEach((elem, i) => {
            let rect = elem.getBoundingClientRect().y;

            if (rect < 70 && rect > (-elem.offsetHeight)) {
                navLink.forEach(el => el.classList.remove('active-link'));
                navLink[i].classList.add('active-link');
            }

        });
        scrollnav();
    }

    const about = document.querySelector('#about');