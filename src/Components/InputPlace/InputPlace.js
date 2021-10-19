import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";




const InputPlace = props => {
    return(
      <View style={ styles.inputView}>
      <TextInput style={{ 
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#000',
       }}
        placeholder="Name of the place..."
        value={props.inputValue}
        onChangeText={text => props.setInputValue(text)}
       />
      </View>
    );
}



const styles = StyleSheet.create({
    inputView: {
        padding: 20,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default InputPlace;