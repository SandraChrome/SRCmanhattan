document.addEventListener('DOMContentLoaded', moveFunctions());
document.getElementById('date-modal').valueAsDate = new Date();

function moveFunctions() {
    document.querySelector('.preloader').classList.add('closed')
    document.body.classList.remove('scrollLock')
    AOS.init();
    moveBurger()
    scrolledHeader()
    moveModal()
    firstTabs()
}

function moveBurger() {
    const burgerBtn = document.querySelector('.header__burger-btn')

    document.addEventListener('click', e => {
        if (e.target.classList.contains('header__burger-btn')) {
            document.querySelector('.header__block').classList.toggle('active')
            burgerBtn.classList.toggle('active')
            document.body.classList.toggle('scrollLock')
        }

        
    })
    
}

function moveModal() {
    const modal = document.querySelector('.reservation')
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
    const lockPadding = document.querySelectorAll('.lock-padding')

    document.addEventListener('click', e => {
        if (e.target.classList.contains('header__btn')) {
            lockPadding.forEach(item => {
                item.style.paddingRight = lockPaddingValue
            })
            modal.classList.add('active')
            document.body.classList.add('scrollLock')
        }

        if (e.target.classList.contains('reservation__close') || e.target.classList.contains('reservation') || e.target.classList.contains('container')) {
            lockPadding.forEach(item => {
                item.style.paddingRight = '0px'
            })
            modal.classList.remove('active')
            document.body.classList.remove('scrollLock')
            document.querySelector('.header__block').classList.remove('active')
            document.querySelector('.header__burger-btn').classList.remove('active')
        }
    })
}

function scrolledHeader() {
    const header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
        let positionY = window.scrollY
        if (positionY > 0) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })
}

function firstTabs() {
    const buttons = document.querySelectorAll('.first-block__tabs-button')
    const tabsItem = document.querySelectorAll('.first-block__tabs-collection')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let currentBtn = btn
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            if (!currentBtn.classList.contains('active')) {
                buttons.forEach(otherBtn => {
                    otherBtn.classList.remove('active')
                })

                tabsItem.forEach(otherTabs => {
                    otherTabs.style.opacity = 0
                    otherTabs.classList.remove('active')
                })

                currentBtn.classList.add('active')
                currentTab.classList.add('active')

                setTimeout(function () {
                    currentTab.style.opacity = 1
                }, 200)
            }


        })
    })
}