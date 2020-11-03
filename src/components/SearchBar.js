import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style = { styles.backgroundStyle }>
            <Feather name = "search" style = { styles.iconStyle }/>
            <TextInput 
                autoCapitalize = "none"
                autoCorrect = { false }
                style = { styles.inputStyle }
                placeholder = "Search"
                value = { term }
                onChangeText = { onTermChange }
                onEndEditing = { onTermSubmit }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: colors.gray,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar;