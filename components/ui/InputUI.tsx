import { Colors, Radius } from '@/constants/styles'
import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native'

type CustomProps = {
	label?: string
	isPassword?: boolean
	icon?: React.ReactNode
	children?: React.ReactNode
}

export function InputUI(props: TextInputProps & CustomProps) {
	return (
		<>
			{props.label && <Text style={styles.label}>{props.label}</Text>}

			<View style={{ position: 'relative' }}>
				{props.icon ? <View style={styles.iconWrapper}>{props.icon}</View> : ''}

				<TextInput
					style={[
						styles.input,
						props.isPassword ? { color: Colors.lightGray } : { color: Colors.primary },
						{ paddingLeft: props.icon ? 48 : 16 },
						props.style,
					]}
					{...props}
					placeholderTextColor={Colors.secondary}
				/>
			</View>

			{props.children && <Text>{props.children}</Text>}
		</>
	)
}

const styles = StyleSheet.create({
	label: {
		paddingLeft: 16,
		marginBottom: 8,
		color: Colors.secondary,
	},
	input: {
		position: 'relative',
		height: 56,
		width: '100%',
		borderWidth: 1,
		borderColor: Colors.borderColor,
		borderRadius: Radius.r16,
		paddingVertical: 20,
		paddingLeft: 16,
		marginBottom: 24,
	},
	iconWrapper: {
		position: 'absolute',
		top: '37%',
		transform: [{ translateY: -12 }],
		left: 16,
		zIndex: 1,
	},
})
