'use strict'

// Ховаємо на мобільних пристроях меню.

let plusBtn = document.querySelector('.panel-menu__btn-plus')
let shadow = document.querySelector('.shadow')

if(plusBtn) {
    plusBtn.addEventListener('click', function() {
        let menu = document.querySelector('.panel-menu')
        


        if(menu) {
            if(this.classList.contains('active')) {
                this.classList.remove('active')
                menu.classList.remove('active')

                if(shadow) {
                    shadow.classList.remove('active')
                }
            } else {
                this.classList.add('active')
                menu.classList.add('active')

                if(shadow) {
                    shadow.classList.add('active')
                }
            }
            
            if(shadow) {
                shadow.addEventListener('click', function() {
                    plusBtn.classList.remove('active')
                    menu.classList.remove('active')
                    this.classList.remove('active')
                })
            }
        }
    })
}