import { InputUI } from '@/components/ui/InputUI'
import { PostItemSearchPillowUI } from '@/components/ui/PostItemSearchPillowUI'
import { IPost } from '@/lib/types'
import { usePosts } from '@/services/posts.service'
import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Search() {
	const { data: posts } = usePosts()

	const [text, setText] = useState<string>('')
	const [filteredPosts, setFilteredPosts] = useState<IPost[] | undefined>([])

	const handleChange = (text: string) => {
		setText(text)
	}

	useEffect(() => {
		if (text.length > 1) {
			const filtered = posts?.filter(post => post.title.toLowerCase().includes(text.toLowerCase()))

			setFilteredPosts(filtered)
		}
	}, [text])

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Search</Text>

			<View style={{ marginTop: 16 }}>
				<InputUI
					placeholder='Search Products...'
					leftIcon={<Image source={require('../../assets/images/search_icon.png')} width={16} height={16} />}
					onChangeText={handleChange}
				/>
			</View>

			<ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
				<View style={{ gap: 8, justifyContent: 'center' }}>
					{(text.length > 1 ? filteredPosts : posts)?.map(post => (
						<PostItemSearchPillowUI key={post.id} post={post} />
					))}
					{filteredPosts?.length == 0 && (
						<View style={{ width: '100%', height: 200, justifyContent: 'center' }}>
							<Text style={{ textAlign: 'center' }}>Sorry, nothing found</Text>
						</View>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 12,
		backgroundColor: '#F2F3F5',
	},
	heading: {
		fontSize: 22,
		fontWeight: '600',
		paddingLeft: 8,
	},
})
