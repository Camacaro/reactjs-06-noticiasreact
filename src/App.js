import Header from './componentes/Header';
import React, { Component } from 'react';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

class App extends Component {

	state = {
		noticias: []
	}

	/**
	 * Ciclo de vida, se ejecuta al cargar el componente
	 */
	componentDidMount() {

		this.consultarNoticias();
	}

	consultarNoticias = (categoria = 'general') => {

		const apiKey = '8c5efa20eb664a04af76e19ba1b0dd0f';

		let url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${apiKey}`;

		/**
		 * Haciendo la peticion con fetch
		 */
		fetch(url)
			.then(respuesta => {
				/**Obtenenos la respuesta del servidor y la retornamos en tipo JSON */
				return respuesta.json();
			})
			.then(noticias => {
                
				/**Obtenemos las noticias */
				this.setState({
					noticias: noticias.articles 
				});
			})
	}

	render() {
		return (
			<div className="contenedor-app">
				<Header
					titulo="Noticias"
				/>

				<div className="container white contenedor-noticias">
					<Formulario
						consultarNoticias={this.consultarNoticias}
					/>
					
					<Noticias
						noticias={this.state.noticias}
					/>
				</div>				
			</div>
		);
	}
}

export default App;
