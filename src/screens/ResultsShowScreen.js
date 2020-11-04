import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    
    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data = {result.photos}
                keyExtractor = { (photo) => photo}
                renderItem = {({item}) => {
                    return <Image style={styles.image} source = {{ uri: item}}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
    }
})

export default ResultsShowScreen;