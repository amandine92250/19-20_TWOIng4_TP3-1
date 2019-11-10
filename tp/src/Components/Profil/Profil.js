import React, {Component} from 'react';
import './Profil.css';

class Profil extends Component{
constructor(props)
	{
		super(props);
	}



	handleChangeColor(index)
	{
		if(this.props.profil.background=="#E1E6FA") 
		{
			this.props.profil.background="#FFF7EE";
			this.setState({pers: index});

		}
		else {
			this.props.profil.background="#E1E6FA";
			this.setState({pers: index});
		}
	}
render()
{
	
	
	return(
	
	<article id="Profil-container" style={{backgroundColor: this.props.profil.background}}>
		<div className="Profil-infos">
		<img src={this.props.profil.photo}/>		

		</div>
		

		<div className="Prenom">{this.props.profil.prenom}</div>
		<div className="Nom">{this.props.profil.nom}</div>
		<div className="Date_naissance">{this.props.profil.date_naissance}</div>
		alert({this.props.profil.background})
		<div className="Changer-style">
		
		<button onClick={ ( ) => this.handleChangeColor(this.props.profil.id)}>Changer style ! 
		</button>
		</div>
		
			</article>
		
				

		)
	
	/*
	return(
		<div>
		<div>
		<ul>
		{
			this.state.profils.map(profil => (
			<div>
<button onclick={() => this.handleSwitch(profil.id)}>{profil.prenom}
		</button>
	
		<div class="Prenom">{this.props.personne.prenom}</div>
		

		</div>

	))}
			
	</ul>
</div>
	
</div>

);
*/
}
}
export default Profil;





 


