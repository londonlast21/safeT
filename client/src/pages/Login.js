import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

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

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="form-container">
    <Form onSubmit={handleFormSubmit}>
        <h1 className="signup-title">Login</h1>
                  <Form.Input
                  label="Email"
                  placeholder="Email.."
                  name="username"
                  type="text"
                  value={formState.username}
                // error={errors.username ? true : false}
                  onChange={handleChange}
                  />
                  <Form.Input
                  label="Password"
                  placeholder="Enter your password.."
                  name="password"
                  type="password"
                  value={formState.password}
                  //error={errors.password ? true : false}
                  onChange={handleChange}
                  />

                  <Button type="submit" primary>
                      Login
                  </Button>
          </Form>
            {/* {error && <div>Login failed</div>} */}
      </div>
        
  );
};

export default Login;