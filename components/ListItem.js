import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = ({ note }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.text}>{note}</Text>
		</View>
	)
}

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		borderWidth: 4,
		borderColor: 'purple',
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#fff000',
		marginTop: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: "400",
	}
});