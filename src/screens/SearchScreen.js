import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import colors from '../config/colors'
import yelp from '../api/yelp'

function SearchScreen(props) {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi  = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  return (
      <View style = { styles.background }>
          <SearchBar 
            term = { term } 
            onTermChange = { setTerm }
            onTermSubmit = { searchApi }
          />
          { errorMessage ? <Text>{errorMessage}</Text> : null }
          <Text>We have found {results.length} results </Text>
      </View>
  );
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: colors.primary
    }
})

export default SearchScreen;
