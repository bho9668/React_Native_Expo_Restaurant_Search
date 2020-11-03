import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import colors from '../config/colors';

function SearchScreen(props) {
  const [term, setTerm] = useState('')
  
  return (
      <View style = { styles.background }>
          <SearchBar 
            term = { term } 
            onTermChange = { () => setTerm() }
            onTermSubmit = { () => console.log("term was submitted") }
          />
          <Text>Search Screen </Text>
      </View>
  );
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: colors.primary
    }
})

export default SearchScreen;
