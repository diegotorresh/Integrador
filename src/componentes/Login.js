import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './css/login.css'

class Login extends Component{

    constructor(props){
      super(props);
      this.state ={
        usuario:'',
        contraseña:''
      }
      this.onChange=this.onChange.bind(this);
      this.Validacion=this.Validacion.bind(this);
    }

    Validacion(e){
      e.preventDefault();

      const form = e.target
      const data = {
        "usuario": form.usuario.value,
        "contraseña": form.contraseña.value
      }

      axios.post('https://cors-anywhere.herokuapp.com/https://proyectoin.herokuapp.com/sistema/Login', data)
      .then(r => {
        localStorage.setItem('token', r.data.token)
        window.location = "/MenuI"
      })
      .catch(e=> console.log(e.response))
    }

    onChange(e){
      this.setState({[e.target.name]: e.target.value})
  }
    render(){

      const {usuario, contraseña} = this.state


      return(
            <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                  <img src={require('./images/cultura.png')}alt="IMG" />
                </div>
                <form className="login100-form validate-form" method="POST" onSubmit={this.Validacion}>
                  <span className="login100-form-title">
                    Iniciar Sesión
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Usuario obligatorio">
                    <input className="input100" type="text" id="usuario" value={usuario} name="usuario" placeholder="Usuario" ref={this.usuRef} onChange={this.onChange}/>
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Contraseña obligatoria">
                    <input className="input100" type="password" id="contraseña" value={contraseña} name="contraseña" placeholder="Contraseña" ref={this.passRef} onChange={this.onChange}/>
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      
                    </span>
                  </div>
                  <div className="home-content__buttons">
                      <input type="submit" className="smoothscroll btn btn--stroke" value="Ingresar" />
                  </div>
      
                  <div className="home-content__buttons">
                                    <a href="/Registro" className="smoothscroll btn btn--stroke">
                                        Registrarse
                                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;