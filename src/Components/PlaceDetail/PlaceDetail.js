import React from "react";
import { View, Modal, Image, Text, Button } from "react-native";



const PlaceDetail = props => {
    return(
        <Modal>
            <View>
                <Image source={{ uri: props.place.image }} style={{ 
                    width: '100%',
                    height: 200,
                 }} />
                <Text style={{ 
                    textAlign: 'center',
                    fontSize: 60,
                 }}> {props.place.value} </Text>
                <View>
                    <Button 
                        title="Delete"
                        color='red'
                        onPress={()  => {
                            props.delete(props.place.key);
                        }}
                    />
                    <Button 
                        title="Close"
                        onPress={props.hide}
                    />
                </View>
            </View>
        </Modal>
    );
}



export default PlaceDetail;