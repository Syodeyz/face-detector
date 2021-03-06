import React from 'react';



class SignIn extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            signInEmail:'',
            signInPassword: ''
        }
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onEmailChange =(event) =>{
        this.setState({signInEmail: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://cool-face-detector.herokuapp.com/signIn', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            })
        })
        .then(response =>response.json()
        .then(data => {
            
            if(data.id){
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
        }))
        
    }
    
    render(){
        const {onRouteChange} = this.props;
        const {onEmailChange, onSubmitSignIn, onPasswordChange} = this;
        return(
            <div className="center br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
                <main className="pa2 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="center f1 fw6 ph0 mh0">Sign In</legend>
                            
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={onEmailChange}
                                />
                            </div>
                            
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={onPasswordChange}/>
                            </div>
                            
                            <div className="">
                            <p className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            onClick={onSubmitSignIn}>Sign in </p>
                            </div>
    
                            <div>
                            <p className="f6 link dim black db pointer" onClick={() => onRouteChange('register') }> Register </p> 
                            </div>
                        </fieldset>
                    </div>
                </main>
            </div>
            );
    }
}


    
export default SignIn;