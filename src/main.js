import Controller from './controller';
import TicTacToe from './model';
import View from './view';

const app = new Controller(new TicTacToe(), new View());
app.createView();
