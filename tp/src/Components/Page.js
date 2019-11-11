import React, { Component } from 'react';
import Profil from "./Profil/Profil";
import Super from "./Super/Super";

import './Page.css';


class Page extends React.Component {
	constructor(props) {
		super(props);
		//Nos objets javascript
		this.state = { 
			profils: [
				{
					nom: "Maurice",
					prenom: "Bob",
					date_naissance: "21/07/1985",
					photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8koQN8aYgCdVeZTzL5O_71PauVPn3rbVR1V48z4RtYpn5-9hITg&s",
					background:"#F7F7F0",
					publication : "Bonjour !",
					nb_super : 0,
					id: 0

				},
				{
					nom: "Poula",
					prenom: "Matiew",
					date_naissance:"12/03/2000",
					photo: "https://www.sylvain-renard.com/wp-content/uploads/2017/05/SR20160129-623.jpg",
					background : "#F7F7F0",
					publication : "Les bleus ont gagné !!",
					nb_super : 0,
					id: 1
				},
				{
					nom: "Alouha",
					prenom: "Camille",
					date_naissance: "07/08/1967",
					photo: "https://www.monportraitpro.fr/wp-content/uploads/2017/03/monportraitpro-corporate-4.jpg",
					background : "#F7F7F0",
					publication : "Vive l'ECE !!",
					nb_super : 0,
					id: 2
				}
			],
			pers : 0
		};
		this.handleSwitch = this.handleSwitch.bind(this);

	}

// Pour mettre a jour le num de la personne sur laquelle on est
	handleSwitch(index) 
	{
		this.setState({pers: index});
	}


	render() {
		return (
			<div>

			<div className="Switch">
			<div className="Bloc_switch">

			<div className="Bouton_switch">
			<ul>
			<button className="First" onClick={ ( ) => this.handleSwitch(0)}> {this.state.profils[0].prenom}</button>
<button className="Second" onClick={ ( ) => this.handleSwitch(1)}> {this.state.profils[1].prenom}</button>
<button className="Third" onClick={ ( ) => this.handleSwitch(2)}> {this.state.profils[2].prenom}</button>
</ul>
</div>

</div>

</div>
<div className="Profil_utilisateur">
	<Profil profil = {this.state.profils[this.state.pers]}/>
		</div>


<div className="Super_utilisateur">
	<Super super = {this.state.profils[this.state.pers]}/>
		</div>
</div>


);
}
}

export default Page;
