const heading = document.querySelector("span");
const article = document.querySelector("article");
const pointer = document.querySelector("section");
const runner = () => {
  const injector = (id, content) => {
    heading.textContent = `${id}`;
    article.textContent = `${content}`;
  };
  if (localStorage.getItem("id")) {
    const id = localStorage.getItem("id");
    const content = localStorage.getItem("advice");
    injector(id, content);
  } else {
    advice()
      .then((advice) => {
        injector(advice.id, advice.advice);
      })
      .catch((err) => console.log(err));
  }
  advice()
    .then((advice) => {
      localStorage.setItem("id", advice.id);
      localStorage.setItem("advice", advice.advice);
    })
    .catch((err) => console.log(err));
};
runner();
pointer.addEventListener("click", () => {
  runner();
});
setInterval(() => {
  if (heading.textContent === localStorage.getItem("id")) {
    runner();
  }
}, 1000);
