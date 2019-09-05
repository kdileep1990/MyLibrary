import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}></Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10
  },
  headerText: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: '500'
  }
});
export default Header;