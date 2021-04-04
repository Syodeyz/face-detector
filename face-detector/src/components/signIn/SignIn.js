import React from 'react';
import './SignIn.css';


/**
* a card to wrap it all
* So i need to have a username input 
* password input 
* a button to sign in 
* 
*/
const SignIn = () => {
    return(
        <div className="center br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
            <main className="pa2 black-80">
                <div className="measure">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend className="center f1 fw6 ph0 mh0">Sign In</legend>
                        
                        <div class="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        
                        <div className="">
                        <p class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign in </p>
                        </div>
                        
                        <div>
                        <p className="f6 link dim black db pointer"> Register </p> 
                        </div>
                    </fieldset>
                </div>
            </main>
        </div>
        );
    }
    
    export default SignIn;