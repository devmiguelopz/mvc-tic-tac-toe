class Controller {
  #model;

  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initialize();
  }

  initialize() {
    this.createBinding();
  }

  createBinding() {
    this.#view.playEvent.addListener(move => { this.#model.play(move); });

    this.#model.updateCellEvent.addListener(data => { this.#view.updateCell(data); });
    this.#model.victoryEvent.addListener(winner => { this.#view.victory(winner); });
    this.#model.drawEvent.addListener(() => { this.#view.draw(); });
  }

  createView() {
    this.#view.render();
  }
}

export default Controller;
