import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

const Menu = () => {
  return (
    <ScrollView>
      <View style={{ marginBottom: 50 }} />
      <Calendar
        markingType={'period'}
        markedDates={{
          '2012-05-04': { disabled: true, startingDay: true, color: 'salmon', endingDay: true }
        }}
        style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderBottomWidth: 40, borderColor: 'white' }}
      />

      <View style={{flexDirection:'row'}}>
        <Text>Rabu 13</Text>
        <View style={{flexDirection:'column'}}>
          <View style={styles.agendaBox}>
            <Text>test</Text>
          </View>
          <View style={styles.agendaBox}>
            <Text>test</Text>
          </View>

          <View style={{width:200, height:200, color:'#fff'}} >
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4366A3",
    justifyContent: "center",
    alignItems: "center",
  },
  agenda:{
    flexDirection: 'row'
  },
  agendaBox:{
    width: 100,
    height:20,
    color:'white'
  }
});
