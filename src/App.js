import React, { Component } from 'react';
import './App.css';

let ImageCounter = function ( props ) {
	console.log ( props );
	return (
		<div>
			<img onClick={props.cliknulEpta.bind ( this )} className="App-logo" src={props.url} alt="logo"/>
			<div className="count">{props.count}</div>
		</div>
	)
};


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


	cliknulEpta ( hero ) {
		hero.count = hero.count + 1;
		console.log ( hero );
	}


	render () {

		return (
			<div>
				{this.props.heroes.map ( ( hero, index ) => {
					return (
						<div key={index} className="App">
							<ImageCounter
								url={hero.url}
								count={hero.count}
								cliknulEpta={this.cliknulEpta.bind ( this, hero )}/>
							<h1>{hero.title}</h1>
							<p>{hero.text}</p>
						</div>
					)
				} )}


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
