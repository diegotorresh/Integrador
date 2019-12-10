import React, {Component} from 'react';
import './css/registro.css';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import {Redirect,Link} from 'react-router-dom';

class Registro extends Component{

    apeRef = React.createRef();
    nomRef = React.createRef();
    emailRef = React.createRef();
    dniRef = React.createRef();
    usuRef = React.createRef();
    passRef = React.createRef();

    constructor(props){
        super(props);
        this.state =({
          usuario: {},
          status: null
        })
      }

    componentWillMount(){
        this.validator = new SimpleReactValidator({
            messages:{
                required: "Este campo es obligatorio ",
                alpha_num_space: "El titulo solo puede contener letras, números o espacios"

            }

        });
    }

    changeState = () =>{
        this.setState({
            usuario:{
                apellidos:this.apeRef.current.value,
                nombres:this.nomRef.current.value,
                correo:this.emailRef.current.value,
                dni:this.dniRef.current.value,
                usuario:this.usuRef.current.value,
                contraseña:this.passRef.current.value,
            },
        });
        console.log(this.state)
    }

    registrarUsuario = (e) =>{
        e.preventDefault();

        if(this.validator.allValid()){
            axios.post("https://cors-anywhere.herokuapp.com/https://proyectoin.herokuapp.com/apis/registro",this.state.usuario)
            .then(res=>{
                this.setState({
                    user:res.data.usuario,
                    status:'succes'
                });

            });}else{
                this.setState({
                    status:'failed'
                });
                this.validator.showMessage();
                this.forceUpdate();
            }
        }
    
    render() {
        if(this.state.status == 'succes'){
            return <Redirect to="/MenuI"/>;
        }
        return(
            <div className="limiter">
            <div className="container-login100">
                <div className="login100-more">
                    <img src={require('./images/cultura.png')}alt="IMG" />
                </div>
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                    <form className="login100-form validate-form" onSubmit={this.registrarUsuario}>
                    <span className="login100-form-title p-b-59">
                        Registrar
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Apellidos</span>
                        <input className="input100" type="text" name="apellidos" ref={this.apeRef} onChange={this.changeState} placeholder="Apellidos..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Nombres</span>
                        <input className="input100" type="text" name="nombres" placeholder="Nombre..." ref={this.nomRef} onChange={this.changeState}/>
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Email</span>
                        <input className="input100" type="email" name="email" placeholder="Email..." ref={this.emailRef} onChange={this.changeState}/>
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">DNI</span>
                        <input className="input100" type="text" name="dni" placeholder="DNI..." ref={this.dniRef} onChange={this.changeState}/>
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Usuario</span>
                        <input className="input100" type="text" name="usuario" placeholder="Usuario..." ref={this.usuRef} onChange={this.changeState}/>
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Contraseña</span>
                        <input className="input100" type="text" name="contraseña" placeholder="*************" ref={this.passRef} onChange={this.changeState}/>
                        <span className="focus-input100" />
                    </div>
                    
                    <div className="home-content__buttons">
                        <input type="submit" className="smoothscroll btn btn--stroke" value="Registrarse" />
                        <Link to="/Login" className="smoothscroll btn btn--stroke">
                        Ingresar
                        <i className="fa fa-long-arrow-right m-l-5" />
                        </Link>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}
export default Registro;