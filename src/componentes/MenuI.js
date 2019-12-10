import React, {Component} from 'react';
import './css/main.css';
import './css/fonts.css';
import './css/base.css';

class MenuI extends Component{
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
        if(this.state.isFetch){
            return(
                <div>
                <div class="overlay"></div>
                    <div class="shadow-overlay"></div>
                    <div class="home-content">
                        <div class="row home-content__main">

                        </div>
                </div> 
                </div>
            );
        }

        const oms=this.state.enfermedades[0].info
        const diab3 = this.state.enfermedades[3].info
        const diab2 = this.state.enfermedades[2].info
        const diab12 = this.state.enfermedades[12].info
        const diab13 = this.state.enfermedades[13].info
        const diab14 = this.state.enfermedades[14].info
        const anem1 = this.state.enfermedades[1].info
        const anem4 = this.state.enfermedades[4].info
        const anem5 = this.state.enfermedades[5].info
        const anem6 = this.state.enfermedades[6].info

        return(
            <div>
                <header class="s-header">

                <div class="header-logo">
                    <a class="site-logo" href="/MenuI">
                        <img src={require("./images/logoga.png")} alt="Homepage" />
                    </a>
                </div>
                <nav class="header-nav">

                    <div class="header-nav__content">
                        <h3>Navigation</h3>
                        
                        <ul class="header-nav__list">
                            <li class="current"><a class="smoothscroll"  href="#home" title="home">Inicio</a></li>
                            <li><a class="smoothscroll"  href="#about" title="enfermedades">Enfermedades</a></li>
                            <li><a class="smoothscroll"  href="#services" title="services">Encuestas</a></li>
                            <li><a class="smoothscroll"  href="#works" title="works">Test</a></li>
                            <li><a class="smoothscroll"  href="#clients" title="clients">Iniciar Sesion</a></li>
                            <li><a class="smoothscroll"  href="#contact" title="contact">Registrarse</a></li>
                        </ul>

                    </div> 

                </nav> 

                <a class="header-menu-toggle" href="#0">
                    <span class="header-menu-text">Menu</span>
                    <span class="header-menu-icon"></span>
                </a>
                </header> 

                <section id="home" class="s-home target-section" data-parallax="scroll">
                <div class="overlay"></div>
                <div class="shadow-overlay"></div>
                <div class="home-content">
                    <div class="row home-content__main">
                        <h3>Bienvenido a VFT</h3>
                        <h1>
                            Somos una plataforma medica desarrollada con el fin de informar y tambien poder ayudar con la prevencion de enfermedades mediante un simple test médico.
                        </h1>
                    </div>


                </div> 


                </section>


                <section id='services' class="s-services">

                <div class="row section-header has-bottom-sep" data-aos="fade-up">
                    <div class="col-full">
                        <h3 class="subhead">Enfermedades</h3>
                        <h1 class="display-2">Se puede apreciar una pequeña reseña de la OMS(Organizacion Mundial de la Salud) junto a por ahora las enfermedades tomadas en cuenta.</h1>
                    </div>
                </div> 
                <div class="row services-list block-1-2 block-tab-full">

                    <div class="col-block service-item" data-aos="fade-up">
                        <div class="service-icon">
                            <i class="icon-megaphone"></i>
                        </div>  
                        <div class="service-text">
                            <h3 class="h2">Anemia</h3>
                            <p>{anem1}</p>
                            <b>Tipos: </b>
                            <p>-{anem4}</p>
                            <p>-{anem5}</p>
                            <p>-{anem6}</p>
                            <div class="home-content__buttons">
                                    <a href="/EncAnemia" class="smoothscroll btn btn--stroke">
                                        Realizar Encuesta
                                    </a>
                                    <a href="/TestAnemia" class="smoothscroll btn btn--stroke">
                                        Realizar Test
                                    </a>
                                </div>
                        </div>
                    </div>

                    <div class="col-block service-item" data-aos="fade-up">
                        <div class="service-icon">
                            <i class="icon-group"></i>
                        </div>
                        <div class="service-text">
                            <h3 class="h2">Diabetes</h3>
                            <p>{diab2}</p>
                            <b>Tipos: </b>
                            <p>-{diab12}</p>
                            <p>-{diab13}</p>
                            <p>-{diab14}</p>
                            <div class="home-content__buttons">
                                    <a href="/EncDiabetes" class="smoothscroll btn btn--stroke">
                                        Realizar Encuesta
                                    </a>
                                    <a href="/TestDiabetes" class="smoothscroll btn btn--stroke">
                                        Realizar Test
                                    </a>
                                </div>
                        </div>
                    </div>

                    <div class="col-block service-item" data-aos="fade-up">
                        <div class="service-icon">
                            <i class="icon-paint-brush"></i>
                        </div>
                        <div class="service-text">
                            <h3 class="h2">OMS</h3>
                            <p>{oms}
                            </p>
                            <div class="home-content__buttons">
                                    <a href="https://www.who.int/es" class="smoothscroll btn btn--stroke">
                                        Ir al sitio web
                                    </a>
                                </div>
                        </div>
                    </div>

                </div> 

                </section> 
                <script src="js/jquery-3.2.1.min.js"></script>
                <script src="js/plugins.js"></script>
                <script src="js/main.js"></script>
            </div>
        );
    }
}

export default MenuI;