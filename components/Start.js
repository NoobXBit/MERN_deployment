import React from 'react';

const styles = {
  container: {
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logo: {
    width: '60%', // Decreased width
    maxWidth: '200px', // Decreased maximum width
    margin: '10px auto 5px'  // Adjusted top margin
  },
  nuLogo: {
    width: '40%', // Decreased width
    maxWidth: '120px', // Decreased maximum width
    margin: '20px auto 0',  // Adjusted top margin
    marginBottom: '60px'
  },
  button: {
    backgroundColor: '#FDB813',
    color: 'white',
    borderRadius: '20px',
    padding: '10px 20px',
    marginBottom: '20px',
    width: '80%',
    maxWidth: '250px',
    alignSelf: 'center' // Center horizontally
  },
  bottomImage: {
    width: '150%',
    maxWidth: '100%',
    alignSelf: 'flex-end',  // Align to the bottom
    position: 'absolute',
    bottom: '0',
    left: '0'  // Align to the left
  }
};

const Start = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  const goToHome = () => {
    navigation.navigate('Home');
  }

  const goToRegister = () => {
    navigation.navigate('Register');
  }


  return (
    <div style={styles.container}>
      <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo.png" style={styles.logo} />
      <img src="./assets/logos/nu-logo.png" alt="nu-logo.png" style={styles.nuLogo} />
      <button onClick = {goToLogin} style={styles.button}>Log in as Student/Faculty</button>
      <button onClick = {goToHome} style={styles.button}>Log in as Guest</button>
      <button onClick = {goToRegister} style={styles.button}>Sign up</button>
      <img src="./assets/images/building.png" alt="building.png" style={styles.bottomImage} />
    </div>
  );
};

export default Start;
