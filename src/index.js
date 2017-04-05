import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


let data = [
	{
		count : 0,
		title : "Привет реакт",
		text : "Библиотека для интерфейсов",
		url : "/img/logo.svg"
	},
	{
		count : 0,
		title : "Привет реакт2",
		text : "Бфывфывфыв ывв йсов",
		url : "/img/logo.svg"
	},
];


ReactDOM.render(
  <App heroes={data} />,
  document.getElementById('root')
);
