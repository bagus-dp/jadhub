import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const Sampel = () => {
    return (
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: '#3498db' }} />
        <Text>bagus</Text>
        <Text>Dwi</Text>
        <Nama />
        <Photo />
        <TextInput style={{ borderWidth: 1 }} />
        <BoxGreen />
        <Foto />
      </View>
    );
  };
  
  const style = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#e67e22',
      marginLeft: 20,
      marginTop: 20
    }
  }
  )
  
  const Nama = () => {
    return <Text>Dwi Prasetyo</Text>
  }
  const Photo = () => {
    return <Image source={{ uri: 'https://placeimg.com/100/100/animals' }} style={{ height: 100, width: 100 }} />
  }
  
  class BoxGreen extends Component {
    render() {
      return <Text>ini class componen</Text>;
    }
  
  }
  class Foto extends Component {
    render() {
      return (
        <View>
          <Image source={{ uri: 'https://placeimg.com/100/100/any' }}
            style={{ width: 200, height: 200, borderRadius: 50 }} />
          <Text style={{ fontSize: 50, color: '#2980b9' }} >asdasd</Text>
        </View>
  
      )
    }
  }

  export default Sampel;