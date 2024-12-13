const btn = document.querySelector(".myBtn")

const main = document.querySelector(".mainContent")

const hidden = document.querySelector(".hiddenBlock")

btn.addEventListener("click", () => {
    main.style.display = "none";
    hidden.style.display = "block";
  });

  const back = document.querySelector(".btnBack")
  back.addEventListener("click", () => {
    main.style.display = "block";
    hidden.style.display = "none";
  });

