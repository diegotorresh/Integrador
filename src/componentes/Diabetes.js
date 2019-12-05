import React, {Component} from 'react';


class Diabetes extends Component{

    constructor(props){
        super(props);
        this.state = {
            diabetes:[],
            isFetch: true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://proyectoin.herokuapp.com/apis/infos')
        .then((response) => {
            return response.json()
        })
        .then((infor)=>{
            this.setState({diabetes:infor, isFetch: false})
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
<<<<<<< HEAD
        const diab3 = this.state.diabetes[3].info
        const diab2 = this.state.diabetes[2].info
=======
        const diab1 = this.state.diabetes[1].info
        const diab3 = this.state.diabetes[3].info
        const diabg = this.state.diabetes[0].info
        const diab2 = this.state.diabetes[2].info
        const diab4 = this.state.diabetes[4].info
        const diab5 = this.state.diabetes[5].info
        const diab6 = this.state.diabetes[6].info
>>>>>>> cd9762bffb5b5f9aebca7c225f821a76a1cf38e0
        const diab12 = this.state.diabetes[12].info
        const diab13 = this.state.diabetes[13].info
        const diab14 = this.state.diabetes[14].info

            return(
                <div className="body">
                    <h1>Diabetes: </h1>
                    <p>{diab2}</p>
                    <p>{diab3}</p>
                    <b>Tipos: </b>
                    <p>-{diab12}</p>
                    <p>-{diab13}</p>
                    <p>-{diab14}</p>
                </div>
            );
    }
}
export default Diabetes;