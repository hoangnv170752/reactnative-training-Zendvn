import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <Text style={styles.topText}>Top Left</Text>
      </View>
      <View style = {styles.center}>
        <View style={styles.centerContainer}>
          <Text style={styles.textCenter}>Center</Text>
        </View>
      </View>
      <View style = {styles.bottomRight}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7feff',
    flex: 1
  },
  textCenter: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue'
  },
  centerContainer: {
    padding: 20
  },
  topLeft: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor:'#ffffff',
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  topText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  bottomText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'white',
  },
  center: {
    marginHorizontal: 125,
    width: 150,
    height: 150,
    backgroundColor: '#33ff60',
    justifyContent: 'center',
    borderRadius: 100,
  },
  bottomRight: {
    flex: 1,
  },
  bottom: {
    marginBottom: 20,
    marginTop: 180,
    marginHorizontal: 40,
    backgroundColor:'#7ee6fd',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
  }
});
