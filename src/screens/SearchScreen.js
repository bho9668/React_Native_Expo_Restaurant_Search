import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import colors from '../config/colors'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'
import { ScrollView } from 'react-native-gesture-handler'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter( result => result.price === price)
  }

  return (
      <View style = { styles.container }>
          <SearchBar 
            term = { term } 
            onTermChange = { setTerm }
            onTermSubmit = { () => searchApi(term) }
          />
          { errorMessage ? <Text>{errorMessage}</Text> : null }
          <ScrollView>
            <ResultsList title = "Cost Effective" results = {filterResultsByPrice('$')}/>
            <ResultsList title = "Big Pricier" results = {filterResultsByPrice('$$')}/>
            <ResultsList title = "Big Spender" results = {filterResultsByPrice('$$$')}/>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1
    }
})

export default SearchScreen;
