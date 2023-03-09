import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import { ScreenType } from '../constants/constants';

const AddNoteScreen = ({ onSave, onExit }) => {
	const [enteredText, setEnteredText] = useState("");
	const handleChange = (val) => {
		setEnteredText(val);
	}
	const handleClick = () => {
		if (enteredText.trim().length > 0) {
			onSave(enteredText);
			onExit(ScreenType.allNotes);
		}
	}
	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.title}>Add note</Text>
				<View>
					<TextInput onChangeText={handleChange} style={styles.input} />
				</View>
				<Button onPress={handleClick} title="ADD" />
			</View>
		</View>
	)
}

export default AddNoteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	formContainer: {
		backgroundColor: '#f5f5f5',
		padding: 5,
		marginHorizontal: 10,
		marginVertical: 10,
	},
	input: {
		marginVertical: 20,
		width: '100%',
		borderBottomWidth: 2,
		fontSize: 16,
		padding: 10
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	}
});
