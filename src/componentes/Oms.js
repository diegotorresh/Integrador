import React, {Component} from 'react';


class Oms extends Component{

    constructor(props){
        super(props);
        this.state = {
            infooms:[],
            isFetch: true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://proyectoin.herokuapp.com/apis/infos')
        .then((response) => {
            return response.json()
        })
        .then((omsinf)=>{
            this.setState({infooms:omsinf, isFetch: false})
        })
    }
    render(){

        if(this.state.isFetch){
            return(
                <div className="body"><span className="login100-form-title">
                Cargando
              </span></div>
            );
        }
        const omsinf = this.state.infooms[0].info

            return(
                <div className="body">
                    <h1>OMS</h1>
                    <p>{omsinf}</p>
                </div>
            );
    }
}

export default Oms;
