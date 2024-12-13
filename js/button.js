const btn = document.querySelector(".myBtn")

const main = document.querySelector(".mainContent")

const hidden = document.querySelector(".hiddenBlock")

const back = document.querySelector(".btnBack")




btn.addEventListener("click", () => {
    main.style.display = "none";
    hidden.style.display = "block";
  });

  back.addEventListener("click", () => {
    main.style.display = "block";
    hidden.style.display = "none";
  });

  const hiddenSecond = document.querySelector(".hiddenBlock-2")

  const next = document.querySelector(".next");


  next.addEventListener("click", () => {
    hidden.style.display = "none";
    hiddenSecond.style.display = "block";
  });
  const checkBox = document.querySelectorAll(".myCheckbox")

  checkBox.forEach((checkBox) =>{
    checkBox.addEventListener("change", (e) => {
    next.disabled =!e.target.checked;
    }
    )
  }
)

  const backSecond = document.querySelector(".btnBack-2")

  backSecond.addEventListener("click", () => {
    hidden.style.display = "block";
    hiddenSecond.style.display = "none";
  });

const hiddenThird = document.querySelector(".hiddenBlock-3")

const backThird = document.querySelector(".btnBack-3")


const nextThird = document.querySelector(".btnB-3")


backThird.addEventListener("click", () => {
  hiddenThird.style.display = "none";
  hiddenSecond.style.display = "block";
});
  
nextThird.addEventListener("click", () => {
  main.style.display = "block"
  hiddenThird.style.display = "none";
})
const nextSecond = document.querySelector(".btnB-2 button:nth-child(2)")

const skip = document.querySelector(".btnB-2 button:nth-child(1)")

skip.addEventListener("click", () => {
  hiddenSecond.style.display = "none";
  hiddenThird.style.display = "block"
  })

const input = document.querySelector(".inp")

input.addEventListener('input', function() {
  if (this.value.trim() !== "") { 
    nextSecond.disabled = false;
  } else {
    nextSecond.disabled = true;
  }
});

nextSecond.addEventListener("click", () => {
  hiddenSecond.style.display = "none";
  hiddenThird.style.display = "block"
  })