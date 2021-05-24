import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function AddListScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  
  

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);


  const takePicture = async () => {
    if(camera) {
      const data = await camera.takePictureAsync();
      setImage(data.uri)
    }
  }

  const pickImage =async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View />
  }
  if (hasCameraPermission === false || hasGalleryPermission === false) {
    return <Text>Access Denied</Text>
  }
  return (
  <View style={{ flex: 1 }}>
      <View style={styles.camContainer}>
        <Camera
        ref={ref => setCamera(ref)} 
        style={ styles.fixedRatio } 
        type={type}
        ratio={'1:1'}/>
      </View>
      <Button
          title="Flip Image"
          onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
          }}>
      </Button>
      <Button title="Take Photo" onPress={() => takePicture()}/>
      <Button title="Gallery" onPress={() => pickImage()}/>
      <Button title="Save" onPress={() => navigation.navigate("Save", {image})}/>
      {image && <Image source={{ uri: image }} style={{flex : 1}} />}
  </View>
  );
}



const styles = StyleSheet.create ({
  camContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1    
  }
})
