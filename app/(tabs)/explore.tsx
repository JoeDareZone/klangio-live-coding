import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
			<Text>I'm another screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
