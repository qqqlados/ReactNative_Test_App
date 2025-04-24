import { Colors, Radius } from '@/constants/styles'
import { IComment } from '@/lib/types'
import { StyleSheet, Text, View } from 'react-native'

export function CommentItemUI({ comment }: { comment: IComment }) {
	return (
		<View style={styles.container}>
			<Text style={styles.author} numberOfLines={1}>
				{comment.name}
			</Text>
			<Text style={styles.email} numberOfLines={1}>
				{comment.email}
			</Text>
			<Text style={styles.description} numberOfLines={5}>
				{comment.body}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		maxHeight: 180,
		borderRadius: Radius.r16,
		backgroundColor: '#fff',
		padding: 12,
		gap: 8,
	},
	author: {
		fontSize: 18,
		fontWeight: '500',
	},
	email: {
		fontWeight: '500',
	},
	description: {
		fontSize: 14,
		color: Colors.primary,
		fontWeight: '400',
	},
})
