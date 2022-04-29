const heading = document.querySelector("span");
const article = document.querySelector("article");
const pointer = document.querySelector("figure");
const runner = () => {
  const injector = (id, content) => {
    heading.textContent = `${id}`;
    article.textContent = `${content}`;
  };
  if (localStorage.getItem("id")) {
    const id = localStorage.getItem("id");
    const content = localStorage.getItem("advice");
    injector(id, content);
    advice()
      .then((advice) => {
        localStorage.setItem("id", advice.id);
        localStorage.setItem("advice", advice.advice);
      })
      .catch((err) => console.log(err));
  } else {
    advice()
      .then((slip) => {
        injector(slip.id, slip.advice);
        return advice();
      })
      .then((advice) => {
        localStorage.setItem("id", advice.id);
        localStorage.setItem("advice", advice.advice);
      })
      .catch((err) => console.log(err));
  }
};
runner();
pointer.addEventListener("click", () => {
  runner();
});
