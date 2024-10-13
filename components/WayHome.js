import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
const WayHome = ({ navigation }) => {  

    const proceedOwnExplore = () => {
        navigation.navigate('Explore');
    }
    const proceedSearchExplore = () => {
        navigation.navigate('Search');
    }
    const goToDiscover = ()=>{
        navigation.navigate('Discover');
    }
    const goScanQR = ()=>{
        navigation.navigate('ScanQR');
    }
    const goSearch= ()=>{
        navigation.navigate('GoSearch');
    }
    const goAbout= ()=>{
        navigation.navigate('About');
    }
    const goProfile= ()=>{
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>
            <View style={styles.wayfinder}>
                <img src="./assets/logos/wayfinder-logo.png" alt="wayfinder-logo.png" style={{height:50, width: 80}}/>
            </View>
            <View style = {styles.lessSpace}></View>
            
            <View style={styles.content}>
                <View style = {styles.lessSpace}></View>
                <View style={styles.thisOption}>
                    <img src="./assets/images/own-explore.png" alt="own-explore.png" style={styles.imgHome}/>
                    <View style = {styles.thisRow}>
                        <View style={styles.thisColumn}>
                            <Text style = {styles.option}>WANT TO EXPLORE ON YOUR OWN?</Text>
                            <View style = {styles.thisRow}>
                                <img src="./assets/logos/nu-logo.png" alt="nu-logo.png" style={styles.imgNU}/>
                                <Text style = {{paddingTop: 10, paddingRight: 5, fontWeight: 'bold'}}> Pasay, Metro Manila</Text>
                            </View>
                        </View>
                        
                        <TouchableOpacity onPress={proceedOwnExplore} style={styles.btn}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }} >PROCEED</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            <View style = {styles.makeSpace}></View>    
                <View style={styles.thisOption}>
                    <img src="./assets/images/search-explore.png" alt="search-explore.png" style={styles.imgHome}/>
                    <View style = {styles.thisRow}>
                        <View style={styles.thisColumn}>
                            <Text style = {styles.option}>WANT TO EXPLORE BY SEARCHING?</Text>
                            <View style = {styles.thisRow}>
                                <img src="./assets/logos/nu-logo.png" alt="nu-logo.png" style={styles.imgNU}/>
                                <Text style = {{paddingTop: 10, paddingRight: 5, fontWeight: 'bold'}}> Pasay, Metro Manila</Text>
                            </View>
                            
                        </View>
                        
                        <TouchableOpacity onPress={proceedSearchExplore} style={styles.btn}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }} >PROCEED</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <View style={styles.wholeFooter}>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerButton}>
                        <img src="./assets/clickedIcons/home-logo-clicked.png" alt="home-logo-clicked.png" style={styles.buttonIcon}/>
                        <Text style={styles.clickedBtnText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToDiscover} style={styles.footerButton}>
                        <img src="./assets/logos/discover-logo.png" alt="discover-logo.png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Discover</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity onPress={goScanQR} style={styles.theQR}>
                        <img src="./assets/logos/qr-logo.png" alt="qr-logo.png" style={styles.qrIcon}/>
                    </TouchableOpacity>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={goAbout} style={styles.footerButton}>
                        <img src="./assets/logos/AboutUs-icon(1).png" alt="AboutUs-icon(1).png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>About Us</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress = {goProfile} style={styles.footerButton}>
                        <img src="./assets/logos/profile-logo (2).png" alt="profile-logo (2).png" style={styles.buttonIcon}/>
                        <Text style={styles.footerButtonText}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    content: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        flex: 1 ,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
    },
    footerButtonText: {
        fontWeight: 'bold',
        color: '#f4f4f4',
    },
    btn: {
        width: '33%',
        height: 30,
        backgroundColor: '#003DA7',
        padding: 4,
        marginTop: 10,
        marginLeft: 10,
        color: 'white'
    },
    headText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#003DA7'
    },
    buttonIcon: {
        width: 40,
        height: 40,
        alignItems: 'center'
    }, 
    imgHome: {
        width: 400,
        height: 250,
        alignItems: 'center',
        marginTop: 10
    }, 
    thisColumn: {
        flexDirection: 'column'
    }, 
    thisRow:{
        flexDirection: 'row'
    },
    imgNU: {
        height: 40,
        widtth: 40,
    },
    option: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    makeSpace:{
        marginTop: 15
    },
    lessSpace: {
        marginBottom: -20
    },
    wayfinder: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
    },
    thisOption: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    theQR: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#003DA7',
        paddingVertical: 10,
        flex: .5,
        alignItems: 'center',
        borderRadius: 100
    },
    wholeFooter: {
        flexDirection: 'row',
        backgroundColor: 'white',
        
    },
    qrIcon: {
        width: 60,
        height: 60,
        alignItems: 'center'
    },
    clickedBtnText: {
        fontWeight: 'bold',
        color: '#FFE76D',
    }
    
});
 
export default WayHome;
