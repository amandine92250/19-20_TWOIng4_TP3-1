import React, { Component } from 'react';
import "./Super.css";

// Composant de la publication + ajout de like
class Super extends React.Component {
	constructor(props)
	{
		super(props);
		/*this.state={
			test:[
				{
				tes:" "
				}
			],
		};*/	
	}

	//ajouter le like
	handleAddSuper(index)
	{
		//const test = this.state.test.slice();
		//test.push({tes:"C'est super !"});
		this.props.super.nb_super=this.props.super.nb_super+1;
		this.setState({pers: index});
		//this.setState({test:test});

	}

	render()
	{
		/*const elements = this.state.test.map(function(tes){
	return <ul>{tes.tes}</ul>
		<div  <!-- className="C_est_super_affichage">{elements}--></div>
})*/
		return(

			<article className="Super_container">
			<h1> Dernière publication  </h1>

			<div className="Publication">
			<div className="Photo"><img src={this.props.super.photo}/></div>	
			<div className="Prenom_nom">{this.props.super.prenom} {this.props.super.nom}</div>
			<div className="Text">{this.props.super.publication}</div>
			<p className="Like">{this.props.super.nb_super}</p>


			<button className="C_est_super" onClick={ ( ) => this.handleAddSuper(this.props.super.id) }>  C'est super! </button>



</div>



</article>



)
}

}

export default Super;