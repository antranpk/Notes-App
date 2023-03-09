import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import BackButton from './components/BackButton';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import { ScreenType } from './constants/constants';

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  let content;
  const updateScreen = (data) => {
    setScreen(data);
  }

  if (screen === ScreenType.addNote) {
    content = (
      <AddNoteScreen
        onExit = {updateScreen}
        onSave = {(data) => setNotes([...notes, { id: Date.now(), note: data }])}
      />
    );
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen notes={notes} />;
  } else if (screen === ScreenType.home){
    content = (
      <HomeScreen
        onExit={updateScreen}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <BackButton onClickButton={updateScreen} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
