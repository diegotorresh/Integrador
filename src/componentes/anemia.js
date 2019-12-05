import React, {Component} from 'react';


class Anemia extends Component{

    constructor(props){
        super(props);
        this.state = {
            anemia:[],
            isFetch: true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://proyectoin.herokuapp.com/apis/infos')
        .then((response) => {
            return response.json()
        })
        .then((infor)=>{
            this.setState({anemia:infor, isFetch: false})
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
        const anem1 = this.state.anemia[1].info
        const anem4 = this.state.anemia[4].info
        const anem5 = this.state.anemia[5].info
        const anem6 = this.state.anemia[6].info

            return(
                <div className="body">
                    <h1>Anemia: </h1>
                    <p>{anem1}</p>
                    <b>Tipos: </b>
                    <p>-{anem4}</p>
                    <p>-{anem5}</p>
                    <p>-{anem6}</p>
                </div>
            );
    }
}
export default Anemia;