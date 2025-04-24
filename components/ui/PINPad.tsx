import { Colors } from '@/constants/styles'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function PINPad({ digitsQuantity = 5 }: { digitsQuantity: 4 | 5 }) {
	const [pin, setPin] = useState<string[]>([])
	const [activeKey, setActiveKey] = useState<string | null>(null)

	const handlePress = (value: string) => {
		setActiveKey(value)
		setTimeout(() => setActiveKey(null), 100)

		if (value === 'back') {
			setPin(prev => prev.slice(0, -1))
		} else if (pin.length < digitsQuantity) {
			setPin(prev => [...prev, value])
		}
		// else if (pin.length == 5) {

		// }
	}

	const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'back']

	return (
		<View style={styles.wrapper}>
			<View style={styles.pinDisplay}>
				{[...Array(digitsQuantity)].map((_, i) => (
					<View key={i} style={[styles.circle, pin[i] && styles.filled]} />
				))}
			</View>

			<View style={styles.keypad}>
				{buttons.map((btn, idx) => {
					const isActive = activeKey === btn
					return (
						<TouchableOpacity key={idx} style={[styles.key, isActive && styles.keyActive]} onPress={() => handlePress(btn)}>
							<Text style={[styles.keyText, btn === 'back' ? { fontWeight: '400' } : { fontWeight: 'bold' }]}>{btn === 'back' ? '⌫' : btn}</Text>
						</TouchableOpacity>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
	},
	pinDisplay: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	circle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: Colors.mediumGray,
	},
	filled: {
		backgroundColor: Colors.orange,
	},
	keypad: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		columnGap: 25,
	},
	key: {
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		backgroundColor: '#fff',
	},
	keyActive: {
		backgroundColor: '#cecdcd',
	},
	keyText: {
		fontSize: 24,
	},
})
