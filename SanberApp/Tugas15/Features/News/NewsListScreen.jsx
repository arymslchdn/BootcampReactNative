import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
	Alert,
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { createNews, deleteNews, listNews } from "../../App";

export const NewsListScreen = () => {
	const [title, setTitle] = useState("");
	const [value, setValue] = useState("");

	const [buttonMode, setButtonMode] = useState("Simpan");

	const [news, setNews] = useState([]);
	const [selectedNews, setSelectedNews] = useState({});

	const handleError = (err) => {
		console.warn("Error Status: ", err.response.data);
		Alert.alert("Gagal", err.response.data.message);
	};

	const getNews = async () => {
		try {
			const res = await listNews();
			const _news = res.data.results.news;
			console.log("res: ", res.data);
			setNews(_news);
		} catch (error) {
			handleError(error);
		}
	};

	const addNews = async (title, value) => {
		try {
			const res = await createNews({ title, value });
			console.log("res: ", res.data);
			setTitle("");
			setValue("");
		} catch (error) {
			handleError(error);
		}
	};

	const submit = async () => {
		try {
			if (buttonMode == "Simpan") {
				await addNews(title, value);
			} else {
				console.log(selectedNews);
				await editNews(selectedNews._id, title, value);
			}
			getNews();
		} catch (error) {
			handleError(error);
		}
	};

	const onSelectItem = (item) => {
		console.log(item);
	};

	const onDelete = async (item) => {
		try {
			const res = await deleteNews({ id: item._id });
			console.log("res: ", res.data);
			getNews();
		} catch (error) {
			handleError(error);
		}
	};

	useFocusEffect(
		useCallback(() => {
			getNews();
		}, []),
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={news}
				keyExtractor={(item, index) => `${item._id}-${index}`}
				renderItem={({ item }) => {
					return (
						<View style={styles.newsItem}>
							<TouchableOpacity
								onPress={() => onSelectItem(item)}
								style={styles.newsContent}>
								<Text style={styles.newsTitle}>{item.title}</Text>
								<Text style={styles.newsValue}>{item.value}</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => onDelete(item)}>
								<Text style={styles.deleteIcon}>X</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
			<View style={styles.form}>
				<Text>Post Data</Text>
				<TextInput
					placeholder="Masukkan Judul Berita"
					style={styles.input}
					value={title}
					onChangeText={setTitle}
				/>
				<TextInput
					placeholder="Masukkan Isi Berita"
					style={styles.input}
					value={value}
					onChangeText={setValue}
				/>
				<Button title={buttonMode} onPress={submit} />
				<Button title="Keluar" onPress={() => {}} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingHorizontal: 20,
	},
	newsItem: {
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 5,
	},
	newsContent: {
		flex: 1,
		padding: 10,
		borderRadius: 12,
		borderColor: "grey",
		borderWidth: 1,
	},
	newsTitle: {},
	newsValue: {},
	deleteIcon: {
		borderWidth: 1,
		fontSize: 20,
		padding: 5,
		borderRadius: 12,
		color: "red",
	},
	form: {
		paddingVertical: 20,
	},
	input: {
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderRadius: 6,
		marginBottom: 10,
	},
	contentNews: {
		backgroundColor: "grey",
		paddingVertical: 10,
	},
});
