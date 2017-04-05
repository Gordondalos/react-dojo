import React, { Component } from 'react';
import './App.css';

// import Hero from './template/app.template';

function Hero ( props ) {

	let count = 0;

	function cliknulEpta () {
		console.log ( count );
		count += 1;
	}

	return (
		<div className="App">
			<img onClick={cliknulEpta} className="App-logo" src={props.url} alt="logo"/>
			<h1>{props.title}</h1>
			<p>{props.text}</p>
			<div className="count">{count}</div>
		</div>
	)
}


class App extends Component {
	// инициализируем состояние меодом

	constructor (props){
		super();
		this.state = {
			count: 0,
			title:"Привет реакт",
			text:"Библиотека для интерфейсов",
			url:"/img/logo.svg"
		};
		console.log(this.state);
	}


	cliknulEpta () {
		console.log(this);
		this.setState ( { count : this.state.count + 1 } );

	}


	render () {

		return (
			<div>
				<div className="App">
					<img onClick={this.cliknulEpta.bind(this)} className="App-logo" src={this.state.url} alt="logo"/>
					<h1>{this.state.title}</h1>
					<p>{this.state.text}</p>
					<div className="count">{this.state.count}</div>
				</div>


				<Hero
					title='Привет реакт'
					text="Библиотека для интерфейсов"
					url="/img/logo.svg"
				/>

				<Hero
					title='Ангуляр 2'
					text="Монстр"
					url="/img/logo.svg"
				/>
			</div>
		)
	}
}

export default App;
