import React from 'react';
class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {"lang": true}
        this.see_lang = this.see_lang.bind(this);
    }
    see_lang(){
        this.setState({"lang": false})
    }
    render(){
        console.log(this.state)
        const style = {
            padding: '10px',
            border: '1px solid green',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 20,
            width: '50%',
            color: '#4db1e8',
            textAlign: 'center',
            fontFamily: 'sans-serif'
        }
        const tech = {
            background: '#4db1e8',
            color: '#fff',
            padding: '5px',
            marginRight: '5px'
        }
        return (
            <div style={style}>
                <img src={this.props.img_url} alt="as" height="50px"/>
                <h2>{this.props.title}</h2>
                {this.state.lang === false ? 
                    <p>                        
                        <span style={tech}>Python</span>
                        <span style={tech}>Django</span>
                    </p>
                    :
                    <button onClick={this.see_lang}>see language</button>
                }
            </div>
        );
    }
  }
  export default Profile;