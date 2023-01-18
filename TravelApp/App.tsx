import React from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, SectionList
} from 'react-native';


function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View  style={styles.view}>
        <Text style={styles.text}>Hoang dep trai</Text>
      </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: 'red'
  },
  view: {
    flex: 1, 
    backgroundColor: 'yellow'
  },
  text: {
    fontWeight: 'bold',
    color: 'black'
  }
});

export default App;
