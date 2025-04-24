import { Radius } from '@/constants/styles'
import { IPost } from '@/lib/types'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function PostItemUI({ post }: { post: IPost }) {
	const router = useRouter()

	return (
		<TouchableOpacity onPress={() => router.navigate(`/post/${post.id}`)}>
			<View style={styles.container}>
				<Text style={styles.title} numberOfLines={1}>
					{post.title}
				</Text>
				<Text style={styles.description} numberOfLines={3}>
					{post.body}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		height: 110,
		borderRadius: Radius.r16,
		backgroundColor: '#fff',
		padding: 12,
		gap: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: '500',
	},
	description: {
		fontSize: 16,
		color: '#414141',
		fontWeight: '400',
	},
})
