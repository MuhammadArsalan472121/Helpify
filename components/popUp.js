import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import Dialog from 'react-native-dialog';

var radio_props = [
  {label: 'English', value: 0},
  {label: 'Swedish', value: 1},
];

export default function App() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Language Settings</Dialog.Title>
        <Dialog.Description>
          <View >
            <RadioForm styles={{borderWidth:1}}
              radio_props={radio_props}
              initial={0}
              buttonColor={'#FC6011'}
            />
          </View>
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>
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
});
