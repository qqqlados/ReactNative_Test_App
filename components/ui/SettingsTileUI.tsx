import { Colors, Radius } from '@/constants/styles'
import { GestureResponderEvent } from 'react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

type Props = {
	label?: string
	text: string
	icon: React.ReactNode
	actionButton?: React.ReactNode
	onPress?: (event: GestureResponderEvent) => void
	style?: ViewStyle | ViewStyle[]
}

export function SettingsTileUI({ label, text, icon, actionButton, onPress, style }: Props) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View>
				{label && <Text style={styles.label}>{label}</Text>}
				<View style={[styles.container, style]}>
					{icon}
					<Text style={{ fontWeight: '500' }}>{text}</Text>
					{actionButton}
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
		borderRadius: Radius.r16,
		borderWidth: 1,
		borderColor: Colors.borderColor,
		minHeight: 56,
		paddingHorizontal: 16,
	},
	label: {
		color: Colors.secondary,
		paddingLeft: 8,
		marginBottom: 8,
	},
	item: {},
})
