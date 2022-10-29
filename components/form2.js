import * as React from 'react';
import { Text, View, StyleSheet,Form ,Label, Input,TextInput,Button} from 'react-native';

export default class Form1 extends React.Component{
   render() {
    return (
      <View
        style={{
          backgroundColor: 'pink',
        }}>
        <Text
          style={{
            marginLeft: 110,
            fontSize: 23,
            fontFamily: ' fantasy',
            margin: 10,
            color: 'blue',
          }}>
          SignUp Page Employer
        </Text>

        <Text style={{ marginLeft: 140, fontSize: 18 }}> Name </Text>

        <TextInput
          placeholder="Your Name"
          onchangeText={(name) => this.setState({ name: name })}
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

        <Text style={{ marginLeft: 110, fontSize: 18 }}> Background </Text>

        <TextInput
          placeholder="Qualification"
          onchangeText={(text) => this.setState({ qualification: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />

        <Text style={{ marginLeft: 110, fontSize: 18 }}> Residence </Text>

        <TextInput
          placeholder="Residence"
          onchangeText={(text) => this.setState({ residnece: text })}
          style={{
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 5,
            margin: 10,
          }}
        />

        <Text style={{ marginLeft: 70, fontSize: 18 }}>
          {' '}
          Any Work Experience{' '}
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

        <Button title="Submit" onPress={() => this.submit()}></Button>
      </View>
    );
  }
}
