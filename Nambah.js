import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Nambah = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#393185', padding: 5, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>X</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', marginVertical: 30 }}>ADD NOTE</Text>

            <View style={{ backgroundColor: '#ffff', height: 731 }}>
                <Text style={{
                    fontSize: 30, fontWeight: 'bold', marginLeft: 26
                }}>Title</Text>
                <TextInput style={{ backgroundColor: '#F4F2F2', height: 32, width: 300, marginRight: 94, borderRadius: 12, marginLeft: 17 }}></TextInput>
                <Text style={{
                    fontSize: 30, fontWeight: 'bold', marginLeft: 26
                }}>Note</Text>
                <TextInput style={{ backgroundColor: '#F4F2F2', height: 32, width: 300, marginRight: 94, borderRadius: 12, marginLeft: 17 }}></TextInput>
                <TouchableOpacity style={{
                    backgroundColor: '#393185', height: 84, width: 156, paddingBottom: 12, marginTop: 30, alignSelf: 'flex-end', borderRadius: 15, padding
                        : 20,marginRight:20,
                }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30, textAlign: 'center' }}>SAVE</Text>
                </TouchableOpacity>



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 46,
        backgroundColor: '#4366A3'
    }
})

export default Nambah;