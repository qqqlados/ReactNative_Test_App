import { ArrowBack } from '@/components/ui/ArrowBack'
import { ButtonUI } from '@/components/ui/ButtonUI'
import { CommentItemUI } from '@/components/ui/CommentItemUI'
import { Colors, Radius } from '@/constants/styles'
import { useCommentsByPostId, usePostById, usePosts } from '@/services/posts.service'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function PostInfoScreen() {
	const router = useRouter()

	const { id } = useLocalSearchParams()

	const { data: post } = usePostById(parseInt(id[0]))

	const { data: comments } = useCommentsByPostId(parseInt(id[0]))

	return (
		<>
			<View style={{ position: 'relative', height: 48, backgroundColor: '#fff' }}>
				<ArrowBack />
			</View>

			<ScrollView style={{ backgroundColor: '#fff', height: '100%' }}>
				<View style={styles.container}>
					<View style={styles.top_section}>
						<View style={styles.postName_container}>
							<Text style={styles.postName}>{post?.title}</Text>
						</View>

						<View style={styles.posterLogo}>
							<Image style={styles.posterLogo_image} source={require('../../assets/images/post_logo.png')} resizeMode='cover' />
						</View>
					</View>

					<View style={styles.about}>
						<Text style={styles.heading}>About</Text>

						<View style={styles.about_container}>
							<Text style={styles.about_text} numberOfLines={4}>
								{post?.body}
							</Text>
						</View>
					</View>

					<View style={styles.comments}>
						<Text style={styles.heading}>Comments</Text>

						<View style={{ gap: 12, marginBottom: 33 }}>
							{comments && comments.length > 0 && comments.slice(0, 3).map((comment, index) => <CommentItemUI key={comment.id} comment={comment} />)}
						</View>
					</View>
				</View>
			</ScrollView>
			<ButtonUI title='Back' onPress={() => router.back()} />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.mutedGray,
		marginTop: 60,
	},
	top_section: {
		justifyContent: 'center',
		borderBottomLeftRadius: Radius.r16,
		borderBottomRightRadius: Radius.r16,
		backgroundColor: '#fff',
		paddingBottom: 40,
	},
	postName_container: {
		width: '100%',
		paddingHorizontal: 40,
	},
	postName: {
		fontSize: 28,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 60,
	},
	posterLogo: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	posterLogo_image: {
		width: '100%',
		height: 230,
	},
	heading: {
		fontWeight: '400',
		color: Colors.secondary,
		marginBottom: 8,
	},
	about: {
		paddingTop: 40,
		marginBottom: 48,
	},
	about_container: {
		padding: 12,
		borderRadius: Radius.r16,
		backgroundColor: '#fff',
	},
	about_text: {
		lineHeight: 32,
	},
	comments: {
		marginBottom: 33,
	},
})
