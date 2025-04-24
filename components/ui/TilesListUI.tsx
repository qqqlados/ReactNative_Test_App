import { Image, StyleSheet, Text, View } from 'react-native'
import { TileUI } from './TileUI'
import { Colors } from '@/constants/styles'

export function TilesListUI({ textData }: { textData: string[] }) {
	return (
		<View style={styles.columnsWrapper}>
			<View style={styles.leftColumn}>
				<TileUI style={{ backgroundColor: Colors.orange }}>
					<Image source={require('../../assets/images/Bitcoin.png')} resizeMode='cover' />
				</TileUI>

				<TileUI>
					<Image source={require('../../assets/images/welcome_2.png')} resizeMode='cover' />
					<Text style={styles.text}>{textData[1]}</Text>
				</TileUI>

				<TileUI>
					<Image source={require('../../assets/images/welcome_4.png')} resizeMode='cover' />
					<Text style={styles.text}>{textData[3]}</Text>
				</TileUI>
			</View>

			<View style={styles.rightColumn}>
				<TileUI>
					<Image source={require('../../assets/images/welcome_2.png')} resizeMode='contain' />
					<Text style={styles.text}>{textData[0]}</Text>
				</TileUI>
				<TileUI>
					<Image source={require('../../assets/images/welcome_3.png')} resizeMode='cover' />
					<Text style={styles.text}>{textData[2]}</Text>
				</TileUI>
				<TileUI>
					<Image source={require('../../assets/images/welcome_5.png')} resizeMode='cover' />
					<Text style={styles.text}>{textData[4]}</Text>
				</TileUI>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	columnsWrapper: { flexDirection: 'row', gap: 16, justifyContent: 'center' },
	leftColumn: {
		flexDirection: 'column',
		gap: 16,
	},
	rightColumn: {
		flexDirection: 'column',
		gap: 16,
		paddingTop: 85,
	},
	text: {
		fontWeight: 400,
		fontSize: 12,
		color: Colors.secondary,
		marginTop: 8,
	},
})
