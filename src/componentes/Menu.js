import React, {Component} from 'react';
import Diabetes from './Diabetes';
import './css/login.css';
import './css/menu.css';


class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            enfermedades:[],
            isFetch: true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://proyectoin.herokuapp.com/apis/infos')
        .then((response) => {
            return response.json()
        })
        .then((enfer)=>{
            this.setState({enfermedades:enfer, isFetch: false})
        })
    }
    render(){
            return(
                <div className="body">
                    <div id="header">
                        <div class="left">
                            <ul class="nav">
                                <li><a href="">Inicio</a></li>
                                <li><a href="">Diabetes</a>
                                    <ul>
                                        <li><a href="/EncDiabetes">Encuesta de Conocimiento</a></li>
                                        <li><a href="/TestDiabetes">Test</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Anemia</a>
                                    <ul>
                                        <li><a href="/EncAnemia">Encuesta de Conocimiento</a></li>
                                        <li><a href="/TestAnemia">Test</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Idioma</a>
                                    <ul>
                                        <li><a href="">Quechua</a></li>
                                        <li><a href="/Menu">Español</a></li>
                                    </ul>
                                </li>
                                <li><a href="/Login">Iniciar Sesion</a></li>
                                <li><a href="/Registro">Registrarse</a></li>
                            </ul>
                        </div>
		            </div>
        
                    <div class="container-menu">
                    
                        <div class="card">
<<<<<<< HEAD
                            <img src={require("./images/oms.jpg")}alt="IMG"/>
                            <p>Según el Ministerio de Salud, de los 1,4 millones de peruanos que tiene diabetes actualmente, sólo la mitad estaría diagnosticada, convirtiéndose en la tercera causa de muerte en el país.<a href="/Oms">Leer mas</a></p>
=======
                            <img src="images/oms.jpg"/>
                            <p>Según el Ministerio de Salud, de los 1,4 millones de peruanos que tiene diabetes actualmente, sólo la mitad estaría diagnosticada, convirtiéndose en la tercera causa de muerte en el país.<a href="/OMS">Leer mas</a></p>
>>>>>>> cd9762bffb5b5f9aebca7c225f821a76a1cf38e0
                            <a href="https://www.who.int/es">Sitio web</a>
                        </div>
                        
                        <div class="card">
<<<<<<< HEAD
                            <img src={require("./images/diabetes1.jpg")}alt="IMG"/>
=======
                            <img src="img/img2.jpg"/>
>>>>>>> cd9762bffb5b5f9aebca7c225f821a76a1cf38e0
                            <p>La diabetes es una enfermedad crónica que aparece cuando el páncreas no produce insulina suficiente o cuando el organismo no utiliza eficazmente la insulina que produce.<a href="/Diabetes">Leer mas.</a></p>
                            <a href="/EncDiabetes">Realizar encuesta</a>
                        </div>
                        
                        <div class="card">
<<<<<<< HEAD
                            <img src={require("./images/anemia.jpg")}alt="IMG"/>
=======
                            <img src="img/img3.jpg"/>
>>>>>>> cd9762bffb5b5f9aebca7c225f821a76a1cf38e0
                            <p>La anemia es una enfermedad crónica no transmisible que tiene como una de sus principales causas la insuficiencia de hierro (mineral que produce glóbulos rojos) en la sangre.<a href="/Anemia">Leer mas.</a></p>
                            <a href="/EncAnemia">Realizar encuesta</a>
                        </div>
        
                    </div> 
                </div>
                );
        }

}

export default Menu;