import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	email?: string
	username: string
	password: string
	image?: string
	isEnterPIN?: boolean
}

const initialState = {
	email: '',
	username: '',
	password: '',
	image: '',
	isEnterPIN: false,
} satisfies AuthState as AuthState

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<AuthState>) {
			state.email = action.payload.email
			state.username = action.payload.username
			state.password = action.payload.password
			state.image = action.payload.image
		},
		removeUser() {
			return initialState
		},
		setEnterPINScreen(state) {
			state.isEnterPIN = true
		},
		removeEnterPINScreen(state) {
			state.isEnterPIN = false
		},
	},
})

export const { setUser, removeUser, setEnterPINScreen, removeEnterPINScreen } = authSlice.actions
export default authSlice.reducer
