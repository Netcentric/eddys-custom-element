function setupElement(elementName, block) {
  const element = document.createElement(elementName);
  element.uuid = `gen${crypto.randomUUID().split('-')[0]}`;
  element.onComponentComplete = block.onComponentComplete;
  element.append(...block.children);
  block.replaceWith(element);
  return block;
}

export default function customElementsDecorate(
  elementName,
  contructor,
  async = false,
) {
  return async function decorate(block) {
    return new Promise((resolve) => {
      block.onComponentComplete = (el) => {
        resolve(el);
      };
      if (customElements.get(elementName)) {
        const el = setupElement(elementName, block);
      } else {
        customElements.define(elementName, contructor);
        if (!window.raqnComponents) window.raqnComponents = {};
        window.raqnComponents[elementName] = contructor;
        const el = setupElement(elementName, block);
      }
    });
  };
}
