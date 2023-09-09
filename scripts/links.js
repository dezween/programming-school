document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".menu__link");
    const navLinksDesktop = document.querySelectorAll(".menu__link-desktop");
    const menuRegister = document.querySelector(".menu__register");

    function smoothScrollTo(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            // метод getBoundingClientRect() вызывается для получения объекта
            //  с информацией о размерах
            //  и позиции этого элемента относительно видимой области окна 
            //  браузера.

            // Метод getBoundingClientRect() возвращает объект с различными 
            // свойствами, такими как top, bottom, left, right, width, height
            //  и др. В данном случае мы используем свойство top, которое 
            //  представляет вертикальную позицию верхней 
            // границы элемента относительно верха видимой области окна браузера.
            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset; // scrollY
            const distance = targetPosition - startPosition;
            const duration = 800; // Время анимации в миллисекундах
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                // Вычитание startTime из currentTime дает разницу 
                // времени между текущим временем и временем начала 
                // анимации.Это значение timeElapsed представляет время, 
                // прошедшее с начала анимации, в миллисекундах.

                // Далее в коде, это значение timeElapsed используется для вычисления 
                // того, насколько должна быть сдвинута позиция прокрутки в данной 
                // анимации. С учетом времени, прошедшего с начала анимации,
                //  и времени анимации (duration),
                //  функция easeInOutCubic вычисляет эффект "плавности" для анимации прокрутки.
                const timeElapsed = currentTime - startTime;
                const ease = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                // Эта команда выполняет плавную прокрутку страницы до определенной
                //  вертикальной позиции
                window.scrollTo(0, ease);
                // Эта строчка представляет условие для продолжения
                //  анимации: она проверяет, прошло ли уже менее времени,
                //   чем duration, и если это так, то она вызывает 
                //   requestAnimationFrame(animation) для следующего
                //    кадра анимации.

                // requestAnimationFrame - это встроенная функция браузера, которая
                //  планирует вызов функции анимации перед следующим перерисовыванием 
                //  страницы (перед следующим кадром анимации). Это позволяет создавать
                //   более плавную и эффективную анимацию, которая будет адаптироваться
                //    к частоте обновления экрана устройства.
                if (timeElapsed < duration) requestAnimationFrame(animation);
                // requestAnimationFrame позволяет создавать анимацию,
                //  которая обновляется в синхронизации с обновлениями э
                //  крана, что делает анимацию более плавной и эффективной. 
                //  В предоставленном вами коде, использование 
                //  requestAnimationFrame позволяет
                //  реализовать плавную анимацию прокрутки страницы к целевому элементу.
            }
            // Алгоритм реализует функцию "интерполяции" 
            // с кубическим плавным затуханием (ease-in-out cubic easing function).
            //  Это означает, что значение будет начинаться медленно, ускоряться в 
            //  середине и замедляться
            //  в конце, создавая ощущение плавности и естественности анимации.

            // t: это время, прошедшее с начала анимации 
            // (обычно передается как timeElapsed).

            // b: это начальное значение.

            // c: это изменение значения.

            // d: это продолжительность анимации (время, в 
            // течение которого анимация должна проходить).
            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }

            //  Если t меньше 1, алгоритм использует кубическую функцию для
            //  создания плавного входа в анимацию. 
            //  Это делается, чтобы начать изменение значения медленно.

            // В противном случае (когда t больше или равно 1), алгоритм использует
            //  кубическую функцию для создания плавного выхода из анимации.
            //   Это делается для замедления изменения значения к концу анимации.

            // Путем сочетания этих двух частей алгоритм создает плавное 
            // изменение значения в течение времени. Используется математическая
            //  формула для этого плавного изменения, что обеспечивает желаемый 
            //  эффект "плавности" анимации.

            // Этот тип функции "easing" очень распространен в анимации и помогает
            //  сделать движения более приятными для глаза, вместо механических и 
            //  резких изменений.

            requestAnimationFrame(animation);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Здесь this представляет текущий элемент (ссылку), к которому было
            //  применено событие "click". Метод getAttribute("href") 
            // используется для получения значения атрибута "href" этой ссылки.
            const target = this.getAttribute("href");
            smoothScrollTo(target);
        });
    });
    navLinksDesktop.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Здесь this представляет текущий элемент (ссылку), к которому было
            //  применено событие "click". Метод getAttribute("href") 
            // используется для получения значения атрибута "href" этой ссылки.
            const target = this.getAttribute("href");
            smoothScrollTo(target);
        });
    });
    menuRegister.addEventListener("click", function (event) {
        event.preventDefault();

        // Здесь this представляет текущий элемент (ссылку), к которому было
        //  применено событие "click". Метод getAttribute("href") 
        // используется для получения значения атрибута "href" этой ссылки.
        const target = this.getAttribute("href");
        smoothScrollTo(target);
    });
});