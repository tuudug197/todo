import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task"

export default function App() {
  return (
    <View style={styles.container}>
      <Task 
         
        task="ka are uviolet pota"
      /> 
      <Task 
        task="zugaatai bailaa"
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 92,
    flex: 1,
    backgroundColor: '#fff',
    gap: 14,
  },
  
});
