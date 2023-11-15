import React from 'react';
import { FlatList, StyleSheet, View , ScrollView,} from 'react-native';
import HTML from 'react-native-render-html';


const userData =[
  {
    id:'1',
    firstname: 'Kent',
    lastname: 'Amora',
    course: 'BSIT',
    yearSection: '3A',
    username: 'KentIvan',
    password: 'KentPogi',
    userType: 'student',
  },
  {
    id:'2',
    firstname: 'James',
    lastname: 'Bucia',
    course: 'BSIT',
    yearSection: '3A',
    username: 'JamesBucia',
    password: 'SheilomyLove',
    userType: 'student',
  },
  {
    id:'3',
    firstname: 'Rhizabelle',
    lastname: 'Dalen',
    course: 'BSIT',
    yearSection: '3A',
    username: 'RhizaBella',
    password: 'gwapako123',
    userType: 'student',
  },
  {
    id:'4',
    firstname: 'Diane',
    lastname: 'Eusalan',
    course: 'BSIT',
    yearSection: '3A',
    username: 'DaisyD',
    password: 'dancing4ever',
    userType: 'student',
  },
  {
    id:'5',
    firstname: 'Deborah',
    lastname: 'Antopina',
    course: ' ',
    yearSection: '',
    username: 'debAlex79',
    password: 'cuteaq123',
    userType: 'teacher',
  },

];



export default function App() {
  const tableHtml = `
  <table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>COURSE</th>
    <th>YEAR & SECTION</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td>${user.course}</td>
        <td>${user.yearSection}</td>
      </tr>
    `
  ).join('')}
</table>
`;

const scrollView = `
<table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>USERNAME</th>
    <th>PASSWORD</th>
    <th>USERTYPE</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.userType}</td>
      </tr>
    `
  ).join('')}
</table>
`;

  const studentData = userData.filter((user) => user.userType === 'student');

  
  



  return (
    <View style={styles.container}>
    <View style={styles.plainMap}>
      <HTML source={{ html: tableHtml }} />
      </View>
      <ScrollView style={styles.scroolViu}>
        <HTML source={{html:scrollView}}/>
      </ScrollView>

      <FlatList
  data={studentData}
  keyExtractor={(student) => student.id}
  renderItem={({ item }) => (
    <HTML
      source={{
        html: `
          <table style="border: 1px solid black; width: 100%">
            <tr>
              <th>ID</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
            </tr>
            <tr key=${item.id}>
              <td>${item.id}</td>
              <td>${item.firstname}</td>
              <td>${item.lastname}</td>
            </tr>
          </table>
        `,
      }}
    />
  )}
  style={styles.flatLest}
/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plainMap: {
    width: '95%',
    margin: 10,
  },
  scroolViu: {
    width: '95%',
    margin: 10,
  },
  
  flatLest: {
    width: '95%',
  },
});

