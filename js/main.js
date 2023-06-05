$(document).ready(function () {
   jQuery(function ($) {
      const headerMain = $("#header-main");
      headerMain.owlCarousel({
         items: 1,
         dots: true,
         nav: false,
         loop: true,
         autoplay: true,
         autoplayTimeout: 4000,
         autoplayHoverPause: true,
      });
      const newsSlider = $("#news-cards");
      newsSlider.owlCarousel({
         items: 1,
         dots: true,
         nav: false,
         loop: true,
      });

      if (window.location.toString().indexOf("product.html") > 0) {
         const docSlider = $("#documentationSlider");
         docSlider.owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            loop: true,

            responsive: {
               0: {
                  items: 2,
                  margin: 30,
               },
               600: {
                  items: 2.5,
                  margin: 0,
               },
               900: {
                  items: 3,
               },
            },
         });

         const accessoriesSlider = $("#accessoriesSlider");
         accessoriesSlider.owlCarousel({
            dots: false,
            nav: false,
            loop: true,

            responsive: {
               0: {
                  items: 2,
                  margin: 20,
               },
               600: {
                  items: 3,
                  margin: 0,
               },
               900: {
                  items: 4,
               },
            },
         });

         const reviewsSlider = $("#reviewsSlider");
         reviewsSlider.owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            loop: true,
            center: true,
            margin: 30,
         });
      }
   });

   // Проверка страницы сайта index
   if (window.location.toString().indexOf("index.html") > 0) {
      const mapCross = document.querySelector(".map__cross");
      const mapPopup = document.querySelector(".map__contacts");
      mapCross.addEventListener("click", function () {
         mapPopup.classList.add("active");
      });
   }
   // nav list

   const dataNav = document.querySelectorAll("[data-nav]");
   const subSecListDatas = document.querySelectorAll("[data-nav-content]");
   dataNav.forEach(function (item) {
      item.addEventListener("mouseover", function () {
         item.classList.add("active");
         const subSecListId = document.querySelector("#" + this.dataset.nav);
         subSecListId.classList.add("active");

         subSecListId.addEventListener("mouseover", function () {
            item.classList.add("active");
            subSecListId.classList.add("active");
         });
         subSecListId.addEventListener("mouseout", function () {
            subSecListId.classList.remove("active");
         });
      });

      item.addEventListener("mouseout", function () {
         const subSecListId = document.querySelector("#" + this.dataset.nav);
         item.classList.remove("active");
         subSecListId.classList.remove("active");
      });
   });

   // Кнопка купит
   const btnBuy = document.querySelectorAll(".btn-buy");
   btnBuy.forEach(function (item) {
      item.addEventListener("click", function () {
         item.classList.toggle("active");
      });
   });

   // Кнопки рядом с кнопкой купить
   const btnIcon = document.querySelectorAll(".btn__icon");
   btnIcon.forEach(function (item) {
      item.addEventListener("click", function () {
         item.classList.toggle("active");
      });
   });

   // Закрыть, Popup на яндекс карте
   // Бургер
   // const mobBurger = document.querySelector(".header-mob__burger");
   // mobBurger.addEventListener("click", function () {
   //    mobBurger.classList.toggle("active");
   // });

   // Форма поиска
   const mobSearch = document.querySelector(".header-mob__round");
   const mobSearchInput = document.querySelector(".header-mob__search");
   const mobForm = document.querySelector(".header-mob__form");
   const headerLogo = document.querySelector(".header__logo");

   mobSearch.addEventListener("click", function (e) {
      if (mobForm.classList.contains("active")) {
         e.preventDefault();

         // Если в input пусто или пробелы
         if (mobSearchInput.value.trim() === "") {
            // Закрываем форму, сбрасываем ввод
            mobForm.classList.toggle("active");
            mobSearchInput.value = "";
            headerLogo.classList.remove("active");
         } else {
            // Иначе, отправляем форму
            mobForm.submit();
            headerLogo.classList.add("active");
         }
      } else {
         e.preventDefault();
         mobForm.classList.toggle("active");

         if (!headerLogo.classList.contains("active")) {
            headerLogo.classList.add("active");
         } else {
            headerLogo.classList.remove("active");
         }
      }
   });

   // Аккардеон для футера
   const footerItemRow = document.querySelectorAll(".footer__mob-item-row");
   footerItemRow.forEach(function (item) {
      item.addEventListener("click", function () {
         item.parentNode.classList.toggle("active");
      });
   });

   const burgerOpen = document.querySelector("#burgerOpen");
   const burgerClose = document.querySelector("#burgerClose");
   const mobNav = document.querySelector(".mob-nav");
   const mobNavSubItem = document.querySelectorAll(".mob-nav__sub-item a");
   const mobNavSecItem = document.querySelectorAll(".mob-nav__sec-item a");
   const mobNavProfItem = document.querySelectorAll(".mob-nav__profile-item a");

   // Main
   const body = document.body;
   const overlay = document.querySelector(".overlay");

   burgerOpen.addEventListener("click", function () {
      mobNav.classList.add("active");
      body.classList.add("active");
   });
   burgerClose.addEventListener("click", function () {
      mobNav.classList.remove("active");
      body.classList.remove("active");
   });

   const mobItem = document.querySelectorAll(".mob-nav__item-row");
   mobItem.forEach(function (item) {
      item.addEventListener("click", function () {
         item.parentNode.classList.toggle("active");
      });
   });

   mobNavSubItem.forEach(function (item) {
      item.addEventListener("click", function () {
         mobNav.classList.remove("active");
         body.classList.remove("active");
      });
   });
   mobNavSecItem.forEach(function (item) {
      item.addEventListener("click", function () {
         mobNav.classList.remove("active");
         body.classList.remove("active");
      });
   });
   mobNavProfItem.forEach(function (item) {
      item.addEventListener("click", function () {
         mobNav.classList.remove("active");
         body.classList.remove("active");
      });
   });

   // Проверка страницы сайта catalog
   if (window.location.toString().indexOf("catalog.html") > 0) {
      // filter

      const filterSLider = document.querySelectorAll(".filter__slider-row");

      const filterItemHead = document.querySelectorAll(".filter__item-head");

      filterItemHead.forEach(function (item) {
         item.addEventListener("click", function () {
            item.parentNode.classList.toggle("active");
         });
      });

      filterSLider.forEach(function (filterSlider) {
         const rangeInput = filterSlider.querySelectorAll(".filter__range-input input"),
            priceInput = filterSlider.querySelectorAll(".filter__field-row input"),
            progress = filterSlider.querySelector(".filter__progress");

         let priceGap = 1000;

         rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
               let minVal = parseInt(rangeInput[0].value),
                  maxVal = parseInt(rangeInput[1].value);

               if (maxVal - minVal < priceGap) {
                  if (e.target.className === "filter__range-min") {
                     rangeInput[0].value = maxVal - priceGap;
                  } else {
                     rangeInput[1].value = minVal + priceGap;
                  }
               } else {
                  priceInput[0].value = minVal;
                  priceInput[1].value = maxVal;
                  progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                  progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
               }
            });
         });

         // const minInput = document.querySelector(".filter__field-min");
         // const maxInput = document.querySelector(".filter__field-max");
         // const minRange = document.querySelector(".filter__range-min");
         // const maxRange = document.querySelector(".filter__range-max");
         // const progressLine = document.querySelector(".filter__progress");
         // minInput.addEventListener("input", function () {
         //    minRange.value = minInput.value;
         //    progressLine.style.left = (+minRange.value / 999999) * 100 + "%";
         // });
         // maxInput.addEventListener("input", function () {
         //    maxRange.value = maxInput.value;
         //    progressLine.style.right = (+maxInput.value / 999999) * 100 + "%";
         // });
      });

      // Filter Catalog content
      const btnFilterSmall = document.querySelector(".filter-var__sizes-grid");
      const btnFilterWide = document.querySelector(".filter-var__sizes-wide");
      const wideContent = document.querySelector(".catalog__content-wide");
      const gridContent = document.querySelector(".catalog__content-grid");

      btnFilterSmall.addEventListener("click", function () {
         btnFilterWide.classList.remove("active");
         btnFilterSmall.classList.add("active");

         wideContent.classList.remove("active");
         gridContent.classList.add("active");
      });

      btnFilterWide.addEventListener("click", function () {
         btnFilterSmall.classList.remove("active");
         btnFilterWide.classList.add("active");

         gridContent.classList.remove("active");
         wideContent.classList.add("active");
      });

      // Pagination at the bottom of catalog
      const paginationItem = document.querySelectorAll(".page-pagination__item");
      paginationItem.forEach(function (item) {
         item.addEventListener("click", function () {
            paginationItem.forEach(function (item2) {
               item2.classList.remove("active");
            });
            item.classList.add("active");
         });
      });

      // Dropdown

      const dropdown = document.querySelectorAll(".dropdown");
      dropdown.forEach(function (dropdown) {
         const dropdownBtn = dropdown.querySelector(".dropdown__btn");
         const dropdownList = dropdown.querySelector(".dropdown__list");
         const dropListItem = dropdown.querySelectorAll(".dropdown__list-item");
         dropdownBtn.addEventListener("click", function () {
            dropdownBtn.classList.add("active");
            dropdownList.classList.toggle("active");
            dropListItem.forEach(function (dropItem) {
               dropItem.addEventListener("click", function (e) {
                  e.stopPropagation();
                  dropdownBtn.innerText = dropItem.innerText;
                  dropdownList.classList.remove("active");
               });
            });

            const dropDownFilter = document.querySelector(".filter-var__sizes");
            dropDownFilter.classList.toggle("active");
         });

         document.addEventListener("click", function (e) {
            if (e.target !== dropdownBtn) {
               dropdownBtn.classList.remove("active");
               dropdownList.classList.remove("active");
            }
         });

         document.addEventListener("keydown", function (e) {
            if (e.key === "Tab" || e.key === "Escape") {
               dropdownBtn.classList.remove("active");
               dropdownList.classList.remove("active");
            }
         });
      });

      // Mobile Filter

      const mobFilter = document.querySelector(".mob-filter");
      const filterBtn = document.querySelector(".filter-btn");
      const prevArrow = document.querySelector(".prev-arrow");

      filterBtn.addEventListener("click", function () {
         overlay.classList.add("active");
         mobFilter.classList.add("active");
         body.classList.add("active");
      });

      prevArrow.addEventListener("click", function () {
         overlay.classList.remove("active");
         mobFilter.classList.remove("active");
         body.classList.remove("active");
      });
   }

   // Проверка страницы - Карта Товара
   if (window.location.toString().indexOf("product.html") > 0) {
      let swiper = new Swiper(".product-card__slider-block", {
         slidesPerView: 1,
      });

      const maxItems = 4;
      const sliderNavItems = document.querySelectorAll(".product-card__nav-item");
      const sliderNav = document.querySelector(".product-card__nav");

      sliderNavItems.forEach((el, index) => {
         el.setAttribute("data-index", index);

         el.addEventListener("click", (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            swiper.slideTo(index);
         });
      });

      const showMore = () => {
         let childrenLength = sliderNav.children.length;

         if (childrenLength > maxItems) {
            document
               .querySelectorAll(`.product-card__nav-item:nth-child(n+${maxItems + 1})`)
               .forEach((el) => {
                  el.style.display = "none";
               });
            sliderNav.insertAdjacentHTML(
               "beforeend",
               `<button class="slider-btn">Еще ${childrenLength - maxItems}</button>`
            );
         }
      };

      showMore();

      // Card Cashback/Gift variants

      const prdocutPromotion = document.querySelectorAll(".product-card__promotion");
      prdocutPromotion.forEach(function (prdocutPromotion) {
         const btnPromotion = prdocutPromotion.querySelectorAll("[data-promotion]");
         const promItem = prdocutPromotion.querySelectorAll("[data-prom-item]");
         const productAction = document.querySelector(".product__action");
         const productContent = document.querySelector(".product__content");

         btnPromotion.forEach(function (item) {
            item.addEventListener("click", function () {
               btnPromotion.forEach((el) => {
                  el.classList.remove("active");
               });

               item.classList.add("active");
               promItem.forEach(function (item) {
                  item.classList.remove("active");
               });
               const promotionItem = prdocutPromotion.querySelector(
                  `[data-${this.dataset.promotion}]`
               );
               // console.log(promotionItem.dataset);
               promotionItem.classList.add("active");

               if (promotionItem.dataset.cardGift === "card-gift") {
                  productAction.classList.add("active");
                  productContent.style.cssText = `margin-right: 60px;`;
               } else {
                  productAction.classList.remove("active");
                  productContent.style.cssText = `margin-right: 42px;`;
               }
            });
         });
      });

      // Button Choose
      const btnChoose = document.querySelectorAll(".btn-choose");
      btnChoose.forEach(function (item) {
         item.addEventListener("click", function () {
            item.classList.toggle("active");
            item.parentNode.classList.toggle("active");
         });
      });

      // Review Sort
      const reviewItem = document.querySelectorAll(".product__reviews-item");
      reviewItem.forEach((el) => {
         el.addEventListener("click", () => {
            reviewItem.forEach((el) => {
               el.classList.remove("active");
            });
            el.classList.add("active");
         });
      });

      // Favorite

      const favorite = document.querySelectorAll(".favorite");

      favorite.forEach(function (item) {
         item.addEventListener("click", function () {
            item.classList.toggle("active");
         });
      });

      // ORDER

      const btnClick = document.querySelectorAll(".btn-click__modal");
      const orderWrapper = document.querySelector(".order-wrapper");
      const formBtnCont = document.querySelectorAll(".form-succes__btn");

      const modalCross = document.querySelectorAll(".modal-cross");
      modalCross.forEach((el) => {
         el.addEventListener("click", () => {
            const modalWrapper = el.parentNode.parentNode;
            modalWrapper.classList.remove("active");
            overlay.classList.remove("active");
         });
      });

      btnClick.forEach((el) => {
         el.addEventListener("click", () => {
            orderWrapper.classList.add("active");
            overlay.classList.add("active");
         });
      });

      overlay.addEventListener("click", () => {
         overlay.classList.remove("active");
         orderWrapper.classList.remove("active");
      });

      formBtnCont.forEach((el) => {
         el.addEventListener("click", () => {
            const modalSuccesWrapper = el.parentNode.parentNode.parentNode;
            modalSuccesWrapper.classList.remove("active");
            overlay.classList.remove("active");
         });
      });

      $("#order-tel").mask("+7 (999) 99-99-999");
      $("#action-tel").mask("+7 (999) 99-99-999");

      //FORM VALIDATE
      $(".order").validate({
         rules: {
            tel: {
               required: true,
            },
         },
         messages: {
            tel: {
               required: "*",
            },
         },
         submitHandler: function (form) {
            ajaxFormSubmit();
         },
      });

      // Функция AJAX запрса на сервер

      function ajaxFormSubmit() {
         let string = $(".order").serialize(); // Соханяем данные введенные в форму в строку.

         //Формируем ajax запрос
         $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
               $(".order").slideUp(1);
               $("#answer").html(html);
            },
         });
         // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
         return false;
      }

      // Order Count
      const orderCountWrapper = document.querySelector(".order-count-wrapper");
      const countBtn = document.querySelectorAll(".shipping-info__btn");

      countBtn.forEach((el) => {
         el.addEventListener("click", () => {
            orderCountWrapper.classList.add("active");
            overlay.classList.add("active");
         });
      });

      overlay.addEventListener("click", () => {
         overlay.classList.remove("active");
         orderCountWrapper.classList.remove("active");
      });

      const countSearch = document.querySelector(".order-count__search");
      const countHint = document.querySelector(".order-count__hint");
      countSearch.addEventListener("input", () => {
         countHint.classList.add("active");
      });
      countSearch.addEventListener("blur", () => {
         countHint.classList.remove("active");
      });

      // Counter
      const counter = document.querySelectorAll(".counter");

      counter.forEach(function (counter) {
         let plusCount = counter.querySelector(".counter__plus");
         let minusCount = counter.querySelector(".counter__minus");
         plusCount.addEventListener("click", () => {
            let countQuantity = counter.querySelector(".counter__quantity");
            let quantity = +countQuantity.innerText;

            if (quantity >= 1) {
               countQuantity.innerText = quantity + 1;
            }
         });

         minusCount.addEventListener("click", () => {
            let countQuantity = counter.querySelector(".counter__quantity");
            let quantity = +countQuantity.innerText;

            if (quantity > 1) {
               countQuantity.innerText = quantity - 1;
            }
         });
      });

      // Legal Face
      const legalFaceBtn = document.querySelectorAll(".product__selling-legal");
      const legalFaceWrapper = document.querySelector(".legal-face-wrapper");
      const legalFaceCont = document.querySelector(".legal-face__btn");

      legalFaceBtn.forEach((el) => {
         el.addEventListener("click", () => {
            overlay.classList.add("active");
            legalFaceWrapper.classList.add("active");
         });
      });

      overlay.addEventListener("click", () => {
         overlay.classList.remove("active");
         legalFaceWrapper.classList.remove("active");
      });
      legalFaceCont.addEventListener("click", () => {
         overlay.classList.remove("active");
         legalFaceWrapper.classList.remove("active");
      });

      // scores popup

      const scoreBtn = document.querySelectorAll(".product-card__more");
      const scoreWrapper = document.querySelector(".score-info-wrapper");
      const scoreBtnCont = document.querySelector(".score-info__btn");

      scoreBtn.forEach((el) => {
         el.addEventListener("click", () => {
            scoreWrapper.classList.add("active");
            overlay.classList.add("active");
         });
      });

      scoreBtnCont.addEventListener("click", function () {
         overlay.classList.remove("active");
         scoreWrapper.classList.remove("active");
      });
      overlay.addEventListener("click", function () {
         overlay.classList.remove("active");
         scoreWrapper.classList.remove("active");
      });

      // Action Info
      const btnAction = document.querySelectorAll(".product__selling-action");
      const actionInfoWrapper = document.querySelector(".action-info-wrapper");
      btnAction.forEach((el) => {
         el.addEventListener("click", () => {
            overlay.classList.add("active");
            actionInfoWrapper.classList.add("active");
         });
      });
      overlay.addEventListener("click", function () {
         overlay.classList.remove("active");
         actionInfoWrapper.classList.remove("active");
      });

      //FORM VALIDATE
      $(".action-info").validate({
         rules: {
            name: {
               required: true,
            },
            tel: {
               required: true,
            },
            email: {
               required: true,
            },
            link: {
               required: true,
            },
            message: {
               required: true,
            },
         },
         messages: {
            name: {
               required: "*",
            },
            tel: {
               required: "*",
            },
            email: {
               required: "*",
            },
            link: {
               required: "*",
            },
            message: {
               required: "*",
            },
         },
         submitHandler: function (form) {
            ajaxFormSubmitAction();
         },
      });

      // Функция AJAX запрса на сервер

      function ajaxFormSubmitAction() {
         let string = $(".action-info").serialize(); // Соханяем данные введенные в форму в строку.

         //Формируем ajax запрос
         $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
               $(".action-info").slideUp(1);
               $("#answer-action").html(html);
            },
         });
         // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
         return false;
      }

      // Review Popup
      const reviewBtn = document.querySelectorAll(".product__reviews-btn");
      const reviewPopupWrapper = document.querySelector(".review-popup-wrapper");
      reviewBtn.forEach((el) => {
         el.addEventListener("click", () => {
            overlay.classList.add("active");
            reviewPopupWrapper.classList.add("active");
         });
      });

      overlay.addEventListener("click", function () {
         overlay.classList.remove("active");
         reviewPopupWrapper.classList.remove("active");
      });

      //FORM VALIDATE
      $(".review-popup").validate({
         rules: {
            name: {
               required: true,
            },

            email: {
               required: true,
            },
            advantages: {
               required: true,
            },
            flaws: {
               required: true,
            },
            comments: {
               required: true,
            },
            file: {
               required: true,
            },
         },
         messages: {
            name: {
               required: "*",
            },
            email: {
               required: "*",
            },
            advantages: {
               required: "*",
            },
            flaws: {
               required: "*",
            },
            comments: {
               required: "*",
            },
            file: {
               required: "*",
            },
         },
         submitHandler: function (form) {
            ajaxFormSubmitReview();
         },
      });

      // Функция AJAX запрса на сервер

      function ajaxFormSubmitReview() {
         let string = $(".review-popup").serialize(); // Соханяем данные введенные в форму в строку.

         //Формируем ajax запрос
         $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
               $(".review-popup").slideUp(1);
               $("#answer-review").html(html);
            },
         });
         // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
         return false;
      }

      // Review Stars
      const starsRow = document.querySelector(".review-popup__stars"),
         starItem = document.querySelectorAll(".review-popup__star");

      starsRow.addEventListener("click", (e) => {
         let target = e.target;
         if (target.classList.contains("review-popup__star")) {
            target.classList.add("active", "current-active");
         }
      });

      starsRow.addEventListener("mouseover", (e) => {
         let target = e.target;
         if (target.classList.contains("review-popup__star")) {
            removeClass(starItem, "active", "current-active");
            target.classList.add("active", "current-active");
            mouseOverActiveclass(starItem);
         }
      });

      function removeClass(arr) {
         for (let i = 0, iLen = arr.length; i < iLen; i++) {
            for (let j = 1; j < arguments.length; j++) {
               starItem[i].classList.remove(arguments[j]);
            }
         }
      }

      function mouseOverActiveclass(arr) {
         for (let i = 0, iLen = arr.length; i < iLen; i++) {
            if (arr[i].classList.contains("active")) {
               break;
            } else {
               arr[i].classList.add("active");
            }
         }
      }

      // read more review
      const readMoreBtn = document.querySelectorAll(".review-card__btn");
      readMoreBtn.forEach((el) => {
         el.addEventListener("click", () => {
            const comment = el.previousElementSibling;

            if (el.innerText === "Читать полностью") {
               el.innerText = "Скрыть";
               comment.style.cssText = `-webkit-line-clamp: unset`;
            } else {
               el.innerText = "Читать полностью";
               comment.style.cssText = `-webkit-line-clamp: 5`;
            }
         });
      });

      // filter-review
      const flterReviewBtn = document.querySelector(".product__reviews-filter"),
         reviewFilter = document.querySelector(".review-filter"),
         reviewFilterItem = document.querySelectorAll(".review-filter__item"),
         revFilterBtn = document.querySelector(".review-filter__btn"),
         revFilterRating = document.querySelector(".review-filter__rating"),
         revFilterSubItem = document.querySelectorAll(".review-filter__sub-item");

      flterReviewBtn.addEventListener("click", () => {
         overlay.classList.add("active");
         reviewFilter.classList.add("active");
      });

      reviewFilterItem.forEach((el) => {
         el.addEventListener("click", () => {
            reviewFilterItem.forEach((el2) => {
               el2.classList.remove("active");
            });
            el.classList.add("active");
         });
      });

      overlay.addEventListener("click", function () {
         overlay.classList.remove("active");
         reviewFilter.classList.remove("active");
      });

      // filter review dropdown
      revFilterBtn.addEventListener("click", () => {
         revFilterRating.classList.toggle("active");
      });

      revFilterSubItem.forEach((el) => {
         el.addEventListener("click", () => {
            revFilterBtn.innerHTML = el.innerHTML;
         });
      });
   }

   if (window.location.toString().indexOf("basket.html") > 0) {
      // Counter
      const counter = document.querySelectorAll(".counter");

      counter.forEach(function (counter) {
         let plusCount = counter.querySelector(".counter__plus");
         let minusCount = counter.querySelector(".counter__minus");
         plusCount.addEventListener("click", () => {
            let countQuantity = counter.querySelector(".counter__quantity");
            let quantity = +countQuantity.innerText;

            if (quantity >= 1) {
               countQuantity.innerText = quantity + 1;
            }
         });

         minusCount.addEventListener("click", () => {
            let countQuantity = counter.querySelector(".counter__quantity");
            let quantity = +countQuantity.innerText;

            if (quantity > 1) {
               countQuantity.innerText = quantity - 1;
            }
         });
      });

      const accessoriesSlider = $("#accessoriesSlider");
      accessoriesSlider.owlCarousel({
         dots: false,
         nav: false,
         loop: true,

         responsive: {
            0: {
               items: 2,
               margin: 20,
            },
            600: {
               items: 3,
               margin: 0,
            },
            900: {
               items: 4,
            },
         },
      });
      const accessoriesSlider2 = $("#accessoriesSlider-2");
      accessoriesSlider2.owlCarousel({
         dots: false,
         nav: false,
         loop: true,

         responsive: {
            0: {
               items: 2,
               margin: 20,
            },
            600: {
               items: 3,
               margin: 0,
            },
            900: {
               items: 4,
            },
         },
      });
   }
});
