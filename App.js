import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import logos from './assets/logodishub.png'
import dishub from './assets/logos.png'
import Sampel from './Sampel';
import Nambah from './Nambah'
import Tambah from './Tambah'

const App = () => {
  return (
    <ScrollView>
      {/* <Styling />
      <Sampel /> */}
      {/* <Nambah/> */}
      <Tambah />
    </ScrollView>


  );
};

const Styling = () => {
  return (
    <View style={{justifyContent: 'center', alignContent: 'center'}}>
      <Text style={{}}>ini styling</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: '#2ecc71',
        borderColor: '#c0392b',
        marginTop: 20,
        marginLeft: 20
      }}
      />

      <View style={{ paddingTop: 50, paddingLeft: 112, paddingRight: 112, backgroundColor: '#678DCF', width: 411, height: 800, justifyContent: 'center', alignContent: 'center' }}>
        <Image source={logos} style={{  }} />
        <Text style={{ fontSize: 15, marginTop: 7.82, color:'white', fontWeight:'bold' }}>Dinas Perhubungan Provinsi Lampung</Text>
      </View >
      < View style={{ backgroundColor: '#678DCF',flex:1, justifyContent: 'center', alignItems: 'center', borderWidth:1 }}>
        <Image source={dishub} style={{  }} />
        <Text style={{ fontSize: 35, fontWeight: 'bold', color:'white' }}>Selamat Datang</Text>
        <View style={{width:'60%', height:40,}}>
        <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'white',textAlign:'center' }}>Masukkan Username dan Password Anda
          Untuk Masuk Kedalam Jadhub</Text>

        </View>
        <View style={{ backgroundColor: 'white', width: 354, height: 377, borderRadius: 25, marginLeft: 29, marginRight: 29, marginTop: 18 }}>
          <Text style={{ fontSize: 30, fontWeight: 'normal', marginTop: 47, color: '#4366A3', marginLeft: 30 }} >USERNAME</Text>
          <View style={{ backgroundColor: '#B0A5A5', width: 250, height: 50, borderRadius: 25 }}>
            <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'red', textAlign: 'center', marginVertical: 15 }}>Masukkan Username Anda</Text>
          </View>
        </View>
      </View>
    </View>

  );
};




export default App;
