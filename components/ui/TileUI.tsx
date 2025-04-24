import { Radius } from '@/constants/styles'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
	style?: StyleProp<ViewStyle>
	children: React.ReactNode
}

export function TileUI({ style, children }: Props) {
	return <View style={[styles.wrapper, style]}>{children}</View>
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 164,
		height: 136,
		borderRadius: Radius.r16,
		backgroundColor: '#fff',
	},
})
