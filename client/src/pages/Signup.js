import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    };
    
    return (
        <div className="form-container">
            <Form onSubmit={handleFormSubmit}>
                <h1 className="signup-title">Sign Up for Account</h1>
                    <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                    />
                    <Form.Input
                    label="Email"
                    placeholder="example@example.com"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
                    <Form.Input
                    label="Password"
                    placeholder="Choose password.."
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                    />
                
                    <Button type="submit" primary>
                        Sign Up
                    </Button>
            </Form>
                {/* {error && <div>Account creation failed</div>}  */}
            
        </div>

    );

};

export default Signup;