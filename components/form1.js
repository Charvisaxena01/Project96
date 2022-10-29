import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from "firebase"
import db from '../config';
import DropDownPicker from "react-native-dropdown-picker"
import { getDatabase, ref, set } from "firebase/database";
import { RFValue } from "react-native-responsive-fontsize";



export default class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      
      type_of_job_needed: '',
      qual: null,
      residence: '',
      work_experience: '',
      phone_no: '',
    };
  }
 writeUserData=()=>{
   
 }


  render() {
    return (
      <View
        style={{
          backgroundColor: 'pink',
        }}>
        <Text
          style={{
            marginLeft: 95,
            fontSize: 23,
            fontFamily: ' fantasy',
             paddingLeft: -9,
            color: 'blue',
          }}>
          Registration Page 
        </Text>

        <Text style={{ marginLeft: 140, fontSize: 18 }}> Name </Text>

        <TextInput
          placeholder="Your Name"
          onchangeText={(name) => this.setState({ name: name })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 5,
          }}
        />

      

        <Text style={{ marginLeft: 105, fontSize: 18 }}> Job Preference </Text>

  
        <TextInput
          placeholder="Job Preference"
          onchangeText={(text) => this.setState({ type_of_job_needed: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />

        <Text style={{ marginLeft: 110, fontSize: 18 }}> Qualification </Text>
    
       <TextInput
          placeholder="Write your Qualification"
          onchangeText={(text) => this.setState({ work_experience: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />

        <Text style={{ marginLeft: 110, fontSize: 18 }}> Location </Text>

        <TextInput
          placeholder="Residence"
          onchangeText={(text) => this.setState({ residnece: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 5,
          }}
        />

        <Text style={{ marginLeft: 70, fontSize: 18 }}>
          {' '}
          Work Experience{' '}
        </Text>

        <TextInput
          placeholder="Yes/No (If any pls type)"
          onchangeText={(text) => this.setState({ work_experience: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />

        <Text style={{ marginLeft: 70, fontSize: 18 }}>
          
          Phone Number
        </Text>

        <TextInput
          placeholder="Phone Number"
          onchangeText={(text) => this.setState({ phone_no: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />
              <Text style={{ marginLeft: 140, fontSize: 18 }}> E-mail </Text>

        <TextInput
          placeholder="Your e-mail"
          onchangeText={(email) => this.setState({ email: email })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />
<View>
        <TouchableOpacity  style={styles.button}
        onPress={this.writeUserData}>
        <Text>Submit</Text></TouchableOpacity>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button:{
     width:100,
    height:50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor:'blue',
    marginTop:20,
    marginLeft:130
    
  
  }
  })

