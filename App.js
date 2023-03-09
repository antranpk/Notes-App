import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import AllNotesScreen from './screens/AllNotesScreen';
import { ScreenType } from './constants/constants';

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  let content;
  if (screen === ScreenType.addNote) {
    content = <AddNoteScreen />;
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen />;
  } else if (screen === ScreenType.home){
    content = (
      <HomeScreen
        onExit={(data) => {
          setScreen(data);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
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
