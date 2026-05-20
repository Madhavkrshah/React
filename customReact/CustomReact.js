function customRender(reactElement, container) {
  /* 
    V-1 (version one)
  const domEl = document.createElement(reactElement.type);
  domEl.innerHTML = reactElement.children;
  domEl.setAttribute("href", reactElement.props.href);
  domEl.setAttribute("target", reactElement.props.target);

  container.appendChild(domEl);
  */

  const domEl = document.createElement(reactElement.type);
  domEl.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domEl.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domEl);
}

const ReactEl = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(ReactEl, mainContainer);
