import React from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';



const PicImage = props => {
    const handelImagePic = async() => {
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            });
            if(!result.cancelled){
                props.setImage(result.uri);
            }
        }
        catch(e) {
            console.log(e);
        }
    }
    let showImage = null;
    if(props.image !== ""){
        showImage =  <Image source={{ uri: props.image }} style={{width: "100%", height: 200, marginBottom: 10  }}/>;
    }
    return(
        <View>
            {showImage}
          <Button title="Pic an image" onPress={handelImagePic} />
        </View>
    );
}


export default PicImage;