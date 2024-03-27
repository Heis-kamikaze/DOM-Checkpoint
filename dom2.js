document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded.");
    let colorBoxEl = document.getElementById("color-box");
    let changeColorBtn = document.getElementById("change-color-btn");

    getRandomColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }

    changeColorBtn.addEventListener("click", function() {
        colorBoxEl.style.backgroundColor = getRandomColor();
    })

  });
  