import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './css/estilo.css';
import './css/encuestas.css';
import './css/login.css'

class TestDiabetes extends Component{
    constructor(props){
        super(props);
        this.state={
            respuestasD:[],
            isFetch:true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://proyectoin.herokuapp.com/apis/respuestas')
        .then((response) => {
            return response.json()
        })
        .then((resp)=>{
            this.setState({respuestasD:resp, isFetch: false})
        })
    }

    render(){

        if(this.state.isFetch){
            return(
                <div className="body"><span className="login100-form-title">
                Cargando Test
              </span></div>
            );
        }

        const respu=this.state.respuestasD[36].resp1
        const respu1=this.state.respuestasD[37].resp1
        const respu2=this.state.respuestasD[38].resp1
        const respu3=this.state.respuestasD[39].resp1
        const respu4=this.state.respuestasD[40].resp1
        const respu5=this.state.respuestasD[41].resp1
        const respu6=this.state.respuestasD[42].resp1
        const respu7=this.state.respuestasD[43].resp1
        const respu8=this.state.respuestasD[44].resp1
        const respu9=this.state.respuestasD[45].resp1
        const respu10=this.state.respuestasD[46].resp1
        const respu11=this.state.respuestasD[47].resp1
        const respu12=this.state.respuestasD[48].resp1
        const respu13=this.state.respuestasD[49].resp1
        const respu14=this.state.respuestasD[50].resp1
        const respu15=this.state.respuestasD[51].resp1
        const respu16=this.state.respuestasD[52].resp1
        const respu17=this.state.respuestasD[53].resp1
        return(
            <div className="body">
                <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="w3-container">
                                <div className="w3-panel w3-white w3-round-xlarge">
                                        <h1><b>Test para determinar si usted sufre de diabetes</b></h1> 
                                        <p><b>¿Usted tiene algun familiar que padece de diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a1" className="styled" type="checkbox" />
                                                <label for="p1a1">
                                                {respu}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a2" className="styled" type="checkbox" />
                                                <label for="p1a2">
                                                {respu1}
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a3" className="styled" type="checkbox" />
                                            <label for="p1a3">
                                            {respu2}
                                            </label>
                                        </div>  
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Usted presenta sobrepeso?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a1" className="styled" type="checkbox" />
                                                <label for="p2a1">
                                                {respu3}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a2" className="styled" type="checkbox" />
                                                <label for="p2a2">
                                                {respu4}
                                                </label>
                                        </div>            
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Con que frecuencia suele sentir ganas de orinar?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a1" className="styled" type="checkbox" />
                                                <label for="p3a1">
                                                {respu5}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a2" className="styled" type="checkbox" />
                                                <label for="p3a2">
                                                {respu6}
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a3" className="styled" type="checkbox" />
                                            <label for="p3a3">
                                            {respu7}
                                            </label>
                                        </div>  
                                        ----------------------------------------------------------------------------------
                                        <p><b>¿Usted suele experimentar una sed excesiva aún tomando abundante agua?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a1" className="styled" type="checkbox" />
                                                <label for="p4a1">
                                                {respu8}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a2" className="styled" type="checkbox" />
                                                <label for="p4a2">
                                                {respu9}
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a3" className="styled" type="checkbox" />
                                                <label for="p4a3">
                                                {respu10}
                                                </label>
                                        </div>
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿En los ultimos 2 meses usted tuvo alguna variacion de peso?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a1" className="styled" type="checkbox" />
                                                <label for="p5a1">
                                                {respu11}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a2" className="styled" type="checkbox" />
                                                <label for="p5a2">
                                                {respu12}
                                                </label>
                                        </div>            
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Presenta fatiga excesiva durante el día?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a1" className="styled" type="checkbox" />
                                                <label for="p6a1">
                                                {respu13}
                                                </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p6a2" className="styled" type="checkbox" />
                                                    <label for="p6a2">
                                                    {respu14}
                                                    </label>
                                        </div>
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cada cuanto tiempo suele sufrir de calambres en las extremidades?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a1" className="styled" type="checkbox" />
                                                <label for="p7a1">
                                                {respu15}
                                                </label>
                                        </div>   
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a2" className="styled" type="checkbox" />
                                                <label for="p7a2">
                                                {respu16}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a3" className="styled" type="checkbox" />
                                                <label for="p7a3">
                                                {respu17}
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

export default TestDiabetes;