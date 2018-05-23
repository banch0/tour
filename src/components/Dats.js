import React from 'react';
import Login from './Login';



class Dats extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
        <div className="container">
        <h3 style={{marginTop:10}} className="pos">{this.props.zapis[1].maintitle}</h3>
            <div className="row">{this.props.zapis.map((item, i) => {
                return (
                    <div className="col-md-3 post" key={i}>
                    <p>{item.maintitle}</p>
                        <a href={item.href}>
                        <img  src={item.ims} className="photo"/>
                        <br/>
                        {/*<a  href={item.href}>{item.subtitle}</a>*/}
                        </a>
                    </div>
                )
        })}</div>
            
        </div>)
    }
    }
export default Dats