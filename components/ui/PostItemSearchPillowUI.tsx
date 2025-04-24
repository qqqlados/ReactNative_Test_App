import { Radius } from '@/constants/styles'
import { IPost } from '@/lib/types'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function PostItemSearchPillowUI({ post }: { post: IPost }) {
	const capitalizedName = post.title.charAt(0).toUpperCase() + post.title.slice(1)

	const router = useRouter()

	return (
		<TouchableOpacity onPress={() => router.navigate(`/post/${post.id}`)}>
			<View style={styles.container}>
				<Text style={styles.id}>ID: {post.id}</Text>
				<Text style={styles.name}>Name: {capitalizedName}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		height: 88,
		borderRadius: Radius.r16,
		backgroundColor: '#fff',
		paddingLeft: 16,
	},
	id: {
		lineHeight: 24,
	},
	name: {
		fontSize: 13,
		lineHeight: 16,
		color: '#858C94',
	},
})
