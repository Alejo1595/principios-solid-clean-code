(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType,) { }
  }

  class InputAttributes {
    constructor(public placeholder: string, public value: string) { }
  }

  class InputEvents {

    constructor() { }

    setFocus() { };
    getValue() { };
    isActive() { };
    removeValue() { };
  }

  class InputElement {
    public attributes: InputAttributes;
    public events: InputEvents;
    public html: HtmlElement;

    constructor(value: string, placeholder: string, id: string) {
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
      this.html = new HtmlElement(id, 'input');
    }
  }


  //? Idea para la nueva clase InputElement

  const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})()