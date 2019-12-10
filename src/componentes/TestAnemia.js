import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './css/estilo.css';
import './css/encuestas.css';
import './css/login.css'

class EncAnemia extends Component{
    constructor(props){
        super(props);
        this.state={
           respuestasA:[],
            isFetch:true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://proyectoin.herokuapp.com/apis/respuestasanemia')
        .then((response) => {
            return response.json()
        })
        .then((resp)=>{
            this.setState({respuestasA:resp, isFetch: false})
        })
    }
    
    render(){
        if(this.state.isFetch){
            return(
                <div className="body"><span className="login100-form-title">
                Cargando Encuesta sobre la anemia
              </span></div>
            );
        }

        const respu21=this.state.respuestasA[0].respuesta
        const respu22=this.state.respuestasA[1].respuesta
        const respu23=this.state.respuestasA[2].respuesta
        const respu24=this.state.respuestasA[3].respuesta
        const respu25=this.state.respuestasA[4].respuesta
        const respu26=this.state.respuestasA[5].respuesta
        const respu27=this.state.respuestasA[6].respuesta
        const respu28=this.state.respuestasA[7].respuesta
        const respu29=this.state.respuestasA[8].respuesta
        const respu30=this.state.respuestasA[9].respuesta
        const respu31=this.state.respuestasA[10].respuesta
        const respu32=this.state.respuestasA[11].respuesta
        const respu33=this.state.respuestasA[12].respuesta
        const respu34=this.state.respuestasA[13].respuesta
        const respu35=this.state.respuestasA[14].respuesta
        const respu36=this.state.respuestasA[15].respuesta
        const respu37=this.state.respuestasA[16].respuesta
        const respu38=this.state.respuestasA[17].respuesta
        const respu39=this.state.respuestasA[18].respuesta

        return(
            <div className="body">
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="w3-container">
                                    <div className="w3-panel w3-white w3-round-xlarge">
                                            <h1><b>Test para determinar si sufres de anemia</b></h1>   
                                            <p><b>¿Le cuesta mantener la concentracion en alguna actividad que este realizando?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p1a1" className="styled" type="checkbox"   />
                                                    <label for="p1a1">
                                                        {respu21}
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p1a2" className="styled" type="checkbox"   />
                                                    <label for="p1a2">
                                                    {respu22}
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p1a3" className="styled" type="checkbox"   />
                                                    <label for="p1a3">
                                                    {respu23}
                                                    </label>
                                            </div>  
                                            ----------------------------------------------------------------------------------
                                            <p><b>¿Sufre de dolores o fatiga muscular?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p2a1" className="styled" type="checkbox"   />
                                                    <label for="p2a1">
                                                    {respu24}
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p2a2" className="styled" type="checkbox"   />
                                                    <label for="p2a2">
                                                    {respu25}
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p2a3" className="styled" type="checkbox"   />
                                                    <label for="p2a3">
                                                    {respu26}
                                                    </label>
                                            </div>
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿Cada cuanto tiempo suele expermientar algun transtorno digestivo?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p3a1" className="styled" type="checkbox"   />
                                                    <label for="p3a1">
                                                    {respu27}
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p3a2" className="styled" type="checkbox"   />
                                                    <label for="p3a2">
                                                    {respu28}
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p3a3" className="styled" type="checkbox"   />
                                                <label for="p3a3">
                                                {respu29}
                                                </label>
                                            </div>
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿Le cuesta dormir por las noches?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p4a1" className="styled" type="checkbox"   />
                                                    <label for="p4a1">
                                                    {respu30}
                                                    </label>
                                            </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                    <input id="p4a2" className="styled" type="checkbox"   />
                                                        <label for="p4a2">
                                                        {respu31}
                                                        </label>
                                            </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                    <input id="p4a4" className="styled" type="checkbox"   />
                                                        <label for="p4a4">
                                                        {respu32}
                                                        </label>
                                            </div> 
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                    <input id="p4a3" className="styled" type="checkbox"   />
                                                        <label for="p4a3">
                                                        {respu33}
                                                        </label>
                                            </div> 
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿En caso de ser mujer presenta irregularidades en su menstruacion?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p5a1" className="styled" type="checkbox"   />
                                                    <label for="p5a1">
                                                    {respu34}
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p5a2" className="styled" type="checkbox"   />
                                                    <label for="p5a2">
                                                    {respu35}
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p5a3" className="styled" type="checkbox"   />
                                                    <label for="p5a3">
                                                    {respu36}
                                                    </label>
                                            </div>
                                            ---------------------------------------------------------------------------------- 
                                            <p><b>¿Suele experimentar la sensacion de falta de aire?</b></p>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p6a1" className="styled" type="checkbox"   />
                                                    <label for="p6a1">
                                                    {respu37}
                                                    </label>
                                                </div>
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p6a2" className="styled" type="checkbox"   />
                                                    <label for="p6a2">
                                                    {respu38}
                                                    </label>
                                            </div>            
                                            <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p6a3" className="styled" type="checkbox"   />
                                                    <label for="p6a3">
                                                    {respu39}
                                                    </label>
                                            </div>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                <a className="login100-form-btn" href="/Grafica">
                                Enviar Respuestas 
                                </a>
                            </div>           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EncAnemia;