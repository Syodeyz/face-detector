import React from 'react';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            registerName:'',
            registerEmail:'',
            registerPassword:''
        }
    }

    onRegisterNameChange = (event) => {
        this.setState({registerName:event.target.value});
    }

    onRegisterEmailChange = (event) => {
        this.setState({registerEmail:event.target.value});
    }

    onRegisterPasswordChange = (event) => {
        this.setState({registerPassword:event.target.value});
    }

    onRegisterSubmit = () => {
        fetch('http://localhost:3001/register', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                name:this.state.registerName,
                email:this.state.registerEmail,
                password:this.state.registerPassword
            })
        })
        .then(response =>response.json())
        .then(user => {
            if(user){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
            
        })
    }

    render(){
        return(
            <div className="center br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
                <main className="pa2 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend className="center f1 fw6 ph0 mh0">Register</legend>
                            
                            <div class="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="username">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="name"  id="name"
                                onChange={this.onRegisterNameChange}/>
                            </div>
    
                            <div class="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="email-address"
                                onChange={this.onRegisterEmailChange}/>
                            </div>
                            
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="password"  id="password"
                                onChange={this.onRegisterPasswordChange}/>
                            </div>
                            
                            <div className="">
                                <p class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                onClick={this.onRegisterSubmit}>Register </p>
                            </div>
                        </fieldset>
                    </div>
                </main>
            </div>
            );
    }
}

export default Register;