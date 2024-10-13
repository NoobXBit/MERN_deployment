import React from 'react';

const styles = {
  container: {
    backgroundColor: 'white',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '30%'
  },
  loginText: {
    fontSize: '60px',
    color: 'black',
    marginBottom: '10px' 
  },
  signInText: {
    fontSize: '17px', 
    color: 'gray',
    marginBottom: '30px' 
  },
  inputContainer: {
    width: '80%',
    maxWidth: '300px', 
    marginBottom: '20px',
    textAlign: 'left' 
  },
  inputLabel: {
    textAlign: 'left',
    color: 'gray',
    fontSize: '17px'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
    color: 'gray',
    marginBottom: '10px' 
  },
  button: {
    backgroundColor: '#FDB813', 
    color: 'white',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    width: '50%',
    maxWidth: '200px',
    marginBottom: '20px' 
  }
};

const LoginComponent = ({navigation}) => {
    const goVerify = () => {
        navigation.navigate('Verification');
    }
  return (
    <div style={styles.container}>
      <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo" style={styles.logo} />
      <div style={styles.loginText}>Login</div>
      <div style={styles.signInText}>Sign in to continue.</div>
      <div style={styles.inputContainer}>
        <div style={styles.inputLabel}>Email/Number</div>
        <input type="text" placeholder="@students.nu-moa.edu.ph" style={styles.input} />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.inputLabel}>Password</div>
        <input type = "password" placeholder = "******" style={styles.input} />
      </div>
      <button onClick = {goVerify} style={styles.button}>Log in</button>
    </div>
  );
};

export default LoginComponent;
