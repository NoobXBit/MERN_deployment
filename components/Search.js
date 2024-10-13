import React from 'react';

const styles = {
  container: {
    backgroundColor: 'white',
    textAlign: 'center',
    backgroundImage: "url('../images/11bg.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '99%',
    minHeight: '100vh',
    padding: '20 px'
  },
  image: {
    marginTop: '20px',
    width: '70px'
  },
  divider: {
    borderBottom: '1px solid black',
    width: '100%',
    margin: '0 auto'
  },
  blueText: {
    color: 'blue',
    fontSize: '24px',
    margin: '0',
    padding: '0'
  },
  inputContainer: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: '5px'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    fontSize: '10px',
    margin: '0 auto',
    flexWrap: 'wrap'
  },
  navItem: {
    marginRight: '10px',
    marginBottom: '10px',
    color: 'gray',
    padding: '3px 6px', 
    lineHeight: '1'
  },
  logo: {
    width: '50px'
  },
  imageContainer: {
    margin: '20px auto',
    width: '80%',
    borderRadius: '20px',
    overflow: 'hidden'
  },
  spacer: {
    margin: '100px 0'
  },
};

const Search = () => {
  return (
    <div style={styles.container}>
      <img src="./assets/images/logo.png" alt="Logo" style={styles.image} />
      <div style={styles.divider}></div>
      <p style={styles.blueText}>SEARCH</p>
      <div style={styles.divider}></div>
      <div style={styles.inputContainer}>
        <img src="./assets/images/11icoon.png" alt="Loc" style={{ ...styles.logo, marginRight: '10px' }} />
        <input type="text" placeholder="Type your location" style={styles.input} />
      </div>

      {/* Spacer */}
      <div style={styles.spacer}></div>

      {/* Image Container */}
      <div style={styles.imageContainer}>
        <img src="./assets/images/haynako.png" alt="Image" style={{ width: '100%' }} />
      </div>

      <nav style={styles.nav}>
        <a href="WayHome.js" style={styles.navItem}>
          <img src="./assets/images/home.png" alt="Home Logo" style={styles.logo} />
          <br />Home
        </a>
        <a href="Discover.js" style={styles.navItem}>
          <img src="./assets/images/discover.png" alt="Discover Logo" style={styles.logo} />
          <br />Discover
        </a>
        <a href="ScanQR.js" style={styles.navItem}>
          <img src="./assets/images/qr.png" alt="QR Logo" style={styles.logo} />
          <br />QR
        </a>
        <a href="Search.js" style={styles.navItem}>
          <img src="./assets/images/yellowsearch.png" alt="Search Logo" style={styles.logo} />
          <br />Search
        </a>
        <a href="About.js" style={styles.navItem}>
          <img src="./assets/images/contactus.png" alt="Contacts Logo" style={styles.logo} />
          <br />Contacts
        </a>
      </nav>
    </div>
  );
};

export default Search;
