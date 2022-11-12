"use strict";

// Using as api
const menu = [
  {
    id: 1,
    title: "Burger and fries",
    category: "Burgers",
    price: 15.99,
    img: "/imgs/burgers/burger1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Chacoal Burger",
    category: "Burgers",
    price: 13.99,
    img: "/imgs/burgers/burger2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Healthy toast",
    category: "Toasts",
    price: 6.99,
    img: "/imgs/toasts/toast1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Boneless Chicken",
    category: "Fries",
    price: 20.99,
    img: "/imgs/chickens/chicken1.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Cheese Burger",
    category: "Burgers",
    price: 22.99,
    img: "/imgs/burgers/burger3.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Spicy Chicken",
    category: "Fries",
    price: 18.99,
    img: "/imgs/chickens/chicken3.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Popular Fries Set",
    category: "Fries",
    price: 22.99,
    img: "/imgs/chickens/chicken4.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Egg Sandwich Toast",
    category: "Toasts",
    price: 12.99,
    img: "/imgs/toasts/toast2.png",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Ham Toast",
    category: "Toasts",
    price: 12.99,
    img: "/imgs/toasts/toast3.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Loaded Chicken",
    category: "Fries",
    price: 39.99,
    img: "/imgs/chickens/chicken5.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Chewy Burger",
    category: "Burgers",
    price: 19.99,
    img: "/imgs/burgers/burger4.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Stack Meat Burger",
    category: "Burgers",
    price: 19.99,
    img: "/imgs/burgers/burger5.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "Coca Cola",
    category: "Drinks",
    price: 5,
    img: "/imgs/drinks/CocaCola.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Pepsi",
    category: "Drinks",
    price: 5,
    img: "/imgs/drinks/Pepsi.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Coca Cola",
    category: "Drinks",
    price: 5,
    img: "/imgs/drinks/7Up.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const navbar = document.querySelector(".navbar");
const arrowUp = document.querySelector(".arrowUp");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav", "fixed-top");
  } else {
    navbar.classList.remove("fixed-nav", "fixed-top");
  }
  if (scrollHeight > 500) {
    arrowUp.classList.add("show-arrowUp");
  } else {
    arrowUp.classList.remove("show-arrowUp");
  }
});
window.addEventListener("DOMContentLoaded", function () {
  displayButtons();
  displayMenuItems(menu);
});
// Display buttons
const btn_container = document.querySelector(".btn_container");
const displayButtons = () => {
  const buttonsArr = menu.reduce(
    function (initValue, item) {
      if (!initValue.includes(item.category)) {
        initValue.push(item.category);
      }
      return initValue; // ["all", "burgers", "toasts", etc]
    },
    ["All"] //Initial Value specified
  );
  // console.log(buttonsArr);
  const menuButtons = buttonsArr
    .map(function (buttonName) {
      return `<button class="customizeBtn mx-2" data-id=${buttonName}>${buttonName} </button>`;
    })
    .join(" ");
  btn_container.innerHTML = menuButtons;

  const ourButtons = document.querySelectorAll(".customizeBtn");
  ourButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // Btn Active Tab //
      ourButtons.forEach(function (allBtns) {
        allBtns.classList.remove("btnActive");
      });
      if (!btn.classList.contains("btnActive")) {
        btn.classList.add("btnActive");
      }
      // Btn Active Tab //

      const btnCategoryName = e.currentTarget.dataset.id;
      // console.log(e.currentTarget.dataset.id);
      const filterdCategory = menu.filter(function (item) {
        return btnCategoryName === item.category;
      });
      displayMenuItems(filterdCategory);
      if (btnCategoryName === "All") displayMenuItems(menu);

      // console.log(filterdCategory); return filtered array
    });
  });
};

// Display Menu Items
const menu_container = document.querySelector(".menu_container");
const displayMenuItems = (menuItemData) => {
  const menuItems = menuItemData
    .map(function (item) {
      return `<div class="col-lg-6  mb-4 col-12 col-md-6">
          <div class="item_container row">
            <!-- Img -->
            <div class="col-5">
              <div class=" menuPhoto position-relative">
                <img src=${item.img} class="img-fluid img-thumbnail imgPhoto " width="200" height="200"
                  alt=${item.category}>
                <a
                  class="viewDetails fw-bold text-decoration-none position-absolute text-light opacity-0 top-50 start-50 translate-middle">
                  <i class="fa-solid fa-eye eye fs-4 text-danger"></i>
                  <i class="fa-solid fa-cart-plus cart fs-4 text-danger"></i>
                </a>
              </div>
            </div>
            <!-- Text -->
            <div class="item_text col-7">
              <div class="item_title d-flex justify-content-between">
                <h5>${item.title}</h5>
                <span class="text-primary fw-bold">${item.price} $</span>
              </div>
              <hr class="p-0 m-0">
              <div class="text_description">
                <p class="m-0 text-muted">${item.desc}</p>
              </div>
            </div>
          </div>
        </div>`;
    })
    .join(" ");
  menu_container.innerHTML = menuItems;
};
