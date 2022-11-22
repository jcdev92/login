import { StatusBar }              from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login }                  from "./src/screens/Login";
import SvgTop                     from "./src/public/svg/SvgTop";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.svgTop}>
        <SvgTop />
      </View>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
    svgTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
});
