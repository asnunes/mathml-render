document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name=radio]");
  const renderer = document.getElementById("renderer");
  const textarea = document.querySelector(".textarea");

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        renderer.innerHTML = "";
        const textAreaVal = textarea.value;
        const mathSelected = e.target.value;

        if (mathSelected === "l") {
          renderer.innerHTML = "$$" + textAreaVal + "$$";
        } else if (mathSelected === "m") {
          renderer.innerHTML = textAreaVal;
        } else {
          renderer.innerHTML = "`" + textAreaVal + "`";
        }
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, renderer]);
      }
    });
  });

  textarea.addEventListener("keyup", (e) => {
    renderer.innerHTML = "";
    const mathSelected = document.querySelector(
      "input[name=radio]:checked"
    ).value;

    if (mathSelected === "l") {
      renderer.innerHTML = "$$" + e.target.value + "$$";
    } else if (mathSelected === "m") {
      renderer.innerHTML = e.target.value;
    } else {
      renderer.innerHTML = "`" + e.target.value + "`";
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, renderer]);
  });
});
