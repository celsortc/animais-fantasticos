export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick); //remove o evento do html
      });
      callback();
      // html.removeEventListener("click", handleOutsideClick); //remove o evento do html
    }
  }

  if (!element.hasAttribute(outside)) {
    //verifica se esse evento já existe, se não ele cria, se sim ele não cria, evita duplicidade de event listener
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
}
