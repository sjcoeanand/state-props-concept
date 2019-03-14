import React from 'react';

class MyProfile extends React.Component{
    constructor(){
        super();
        this.state = {
            isShowing : false
        }
        this.seeProfileHandler = this.seeProfileHandler.bind(this);
        this.goBackHandler = this.goBackHandler.bind(this);
    }

    seeProfileHandler (){
        this.setState({isShowing : true})
    }

    goBackHandler(){
        this.setState({isShowing : false})
    }

    render(){
        return(
            <div className="my_profile">
                <h2>{this.props.title}</h2>

                { this.state.isShowing === true ?
                <div>
                    <img src={this.props.profileImg} alt="as" height="100px"/>
                    <h3>{this.props.myname}</h3>
                    <h4>{this.props.desc}</h4>
                    <button onClick={this.goBackHandler}>go back</button>
                </div>
                :
                <button onClick={this.seeProfileHandler}>see my profile</button>

                }               

            </div>
        );
    }
}

export default MyProfile;