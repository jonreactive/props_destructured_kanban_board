import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const List = ({ list }) => (
  <div className="list">
    <h4 className="list-title">{list.title}</h4>
    <ul className="list-items">
      {list.cards.map(item => (
        <li className="list-item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
    <div className="add-card">Add a card...</div>
  </div>
);

const Board = ({ board: { title, lists } }) => (
  <div className="board">
    <h4 className="board-title">{title}</h4>
    <div className="board-lists">
      {lists.map(list => <List key={list.id} list={list} />)}
    </div>
    <Note />
  </div>
);

const Note = () => (
  <h1>* key take away from this session is how I used map , to map through
  a props array of objects. </h1> 
)

let list1 = {
  id: 0,
  title: 'To Do Stuff',
  cards: [
    {
      id: 0,
      title: 'Walk the dog'
    },
    {
      id: 1,
      title: 'Cook Some Dinner'
    },
    {
      id: 2,
      title: 'Eat the Dinner'
    },
    {
      id: 3,
      title: 'Beveled Bezel'
    },
    {
      id: 4,
      title: 'Bezeled Bevel'
    },
    {
      id: 5,
      title: 'Seedless'
    }
  ]
};

let list2 = {
  id: 1,
  title: 'Doing Right Now',
  cards: [
    {
      id: 0,
      title: 'Build a Kanban board'
    },
    {
      id: 1,
      title: "I'm making a note here"
    },
    {
      id: 2,
      title: 'HUGE SUCCESS'
    },
    {
      id: 3,
      title: "Study React"
    }
  ]
};

let board = {
  title: 'A Demo',
  lists: [list1, list2]
};

ReactDOM.render(<Board board={board} />, document.querySelector('#root'));

export { Board, board };
