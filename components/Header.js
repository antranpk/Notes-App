import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerTile}>Your Sticky Notes</Text>
		</View>
	)
}

export default Header;

const styles = StyleSheet.create({

	headerContainer: {
		width: "100%",
		height: "13%", 
		backgroundColor:  Platform.OS == "android" ? "green" : "lightblue",
		paddingTop: 30,
	},
	headerTile: {
		color: Platform.OS == "android" ? "white" : "black",
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		marginTop: 10, 
	}
});
