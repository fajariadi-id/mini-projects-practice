// *======= SELECTOR =======*
const ripples = document.querySelectorAll(".ripple");

// *======= EVENT LISTENER =======*
ripples.forEach((ripple) => {
  ripple.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;
    console.log(btnLeft, btnTop);

    const xBtn = x - btnLeft;
    const yBtn = y - btnTop;
    console.log(xBtn, yBtn);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yBtn + "px";
    circle.style.left = xBtn + "px";
    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});

// *======= FUNCTION =======*
