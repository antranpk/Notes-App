import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { ScreenType } from '../constants/constants';

const BackButton = ({ onClickButton }) => {
	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<Button
					onPress={() => onClickButton(ScreenType.home)}
					color={"grey"}
					title="< Back"
				/>
			</View>
		</View>
	)
}

export default BackButton;

const styles = StyleSheet.create({

	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	button: {
		margin: 10,
	}
});
