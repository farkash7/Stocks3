import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  button: {
    width: 60,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  resetbutton: {
    width: 80,
    height: 40,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop:15
  },
  buyStocksContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buyStocksRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buyStockHead: {
    fontWeight: 'bold',
    fontSize: 17,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  buyStock: {
    fontSize: 17,
    marginTop:10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileHead: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20
  },
  profileData: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:20
  },
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});


export default styles;
