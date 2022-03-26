import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter() {
	let counterVariable = 10;

	// Inisialisasi state dengan nilai awal counter 10
	const [counterState, setCounterState] = useState(10);

	useEffect(() => {
		// Fungsi dijalankan hanya ketika state "counterState" berubah
		console.log({ counterState });
	}, [counterState]);

	return (
		<View style={styles.container}>
			<View style={styles.counter}>
				<Text>Counter (without state) : </Text>
				<Text>{counterVariable}</Text>
				<Button
					title="Increment (without state)"
					onPress={() => {
						++counterVariable;
						console.log({ counterVariable });
						// Nilai varibale "counterVariable" naik tapi tampilan tidak berubah
					}}
				/>
			</View>
			<View style={styles.counter}>
				<Text>Counter (state) : </Text>
				<Text>{counterState}</Text>
				<Button
					title="Increment (state)"
					onPress={() => {
						setCounterState((prevCounterState) => ++prevCounterState);
						// Nilai state berubah, dan tampilan berubah
						// Fungsi cetak dimasukkan ke useeffect karena update
						// berjalan Asynchronous jdi tidak dapat langsung di log
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	counter: {
		alignItems: "center",
	},
});