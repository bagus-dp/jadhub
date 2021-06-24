import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput} from 'react-native';

const Tambah = () => {
return (
    <View style={StyleSheet.container}>
        <View style={{backgroundColor:'#4366A3'}}>
        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#A7B9D8', padding: 5, alignItems: 'center', justifyContent: 'center',marginTop:40,marginLeft:20 }} >
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>X</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginVertical: 10 }}>Tambah Jadwal</Text>
            <View style={{backgroundColor:'white', height:616, width:411,}}>
                <TextInput style={{backgroundColor:'#C4C4C4',borderRadius:10, padding:10, width:'89%', fontSize:17, alignSelf:'center', marginTop:15, marginRight:30 }} placeholder="Masukan Agenda">
                </TextInput> 
                <TextInput style={{backgroundColor:'#C4C4C4',borderRadius:10, padding:10, width:'89%', fontSize:17, alignSelf:'center', marginTop:15, marginRight:30 }} placeholder="Bidang">
                </TextInput> 
                <TextInput style={{backgroundColor:'#C4C4C4',borderRadius:10, padding:10, width:'89%', fontSize:17, alignSelf:'center', marginTop:15, marginRight:30 }} placeholder="Hasil Rapat">
                </TextInput> 
                <TextInput style={{backgroundColor:'#C4C4C4',borderRadius:10, padding:10, width:'89%', fontSize:17, alignSelf:'center', marginTop:15, marginRight:30 }} placeholder="Jumlah Hadir">
                </TextInput> 
                <TextInput style={{backgroundColor:'#C4C4C4',borderRadius:10, padding:10, width:'89%', fontSize:17, alignSelf:'center', marginTop:15, marginRight:30 }} placeholder="Jumlah Absen">
                </TextInput> 
                <TouchableOpacity style={{
                    backgroundColor: '#A7B9D8', height: 84, width: 156, paddingBottom: 12, marginTop: 100, alignSelf: 'flex-end', borderRadius: 15, padding
                        : 20,marginRight:20,
                }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30, textAlign: 'center' }}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>    
    </View>
)
}



export default Tambah;