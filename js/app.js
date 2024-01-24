let input = document.getElementsByTagName("input");
let button = document.getElementsByTagName("button")[0];
let span = document.getElementsByTagName("span");
let img = document.getElementsByTagName("img");


for (let a = 0; a < span.length - 1; a++) {
  span[a].style.display = "none";
}

button.addEventListener("click", () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      input[i].placeholder = "";
      input[i].style.border = "2px solid #FF7979";
      span[i].style.display = "flex";
      img[i].style.display = "block";
    }

    if (i === 2 && input[2].value === "") {
      input[2].placeholder = "email@example/com";
      input[2].classList.add("class");
      input[2].style.border = "2px solid #FF7979";
      span[2].style.display = "flex";
      img[2].style.display = "block";
    }
  }
});

for (let o = 0; o < input.length; o++) {
  input[o].addEventListener("keydown", () => {
    setTimeout(() => {
      if (input[o].value !== "") {
        input[o].placeholder = "";
        input[o].style.border = "2px solid #a4a4a4";
        span[o].style.display = "none";
        img[o].style.display = "none";
      } else if (input[o].value === "") {
        input[o].style.border = "2px solid #FF7979";
        span[o].style.display = "flex";
        img[o].style.display = "block";
      }

      if (o === 2 && input[o].value === "") {
        input[2].placeholder = "email@example/com";
        input[2].classList.add("class");
      } 
      if (o === 2 && !input[o].value.includes('@')) {
        input[o].style.border = "2px solid #FF7979";
        span[o].style.display = "flex";
        img[o].style.display = "block";
      }
    }, 300);
  });
}
