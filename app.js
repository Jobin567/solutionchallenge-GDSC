let movies = [
  {
    name: "No Poverty",
    des:
      "End poverty in all its forms,everywhere. This goal aims to eradicate extreme poverty and reduce overall poverty levels worldwide by 2023.",
    image: "images/slider2.png"
  },
  {
    name: "Zero Hunger",
    des:
      "This goal aims to end hunger, achieve food security,improved nutrition among different nations and promote sustainable agriculture by 2030.",
    image: "images/slider1.png"
  },
  {
    name: "Good Health and Wellbeing",
    des:
      "Ensure healthy lives and promote well being for all,at all ages. It recognizes the importance of access to quality healthcare,safe and nutrition food,clean water and sanitation.",
    image: "images/slider3.png"
  },
  {
    name: "Quality Education",
    des:
      "It ensure inclusive and equitable quality education and promote lifelong learning oppurtunities for all, recognizes the transformative power of education to break the cycle of poverty.",
    image: "images/slider4.png"
  },
  {
    name: "Gender Equality",
    des:
      "Acheive gender equality and empower all women and girls. It recognizes that gender inequality is a root cause of poverty and social injustice and that empowering women and girls is essential for sustainable development.",
    image: "images/slider5.png"
  },
  {
    name: "Clean Water and Sanitation",
    des:
      "Ensure availability and sustainable management of water and sanitation for all human beings,which is a basic human right and essential for human health and environmental sustainability.",
    image: "images/slider6.png"
  }
];
const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);
/// video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});
// card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
