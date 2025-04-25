import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	email?: string
	username: string
	password: string
	image?: string
	accessToken: string
	PIN: string[]
}

const initialState = {
	email: '',
	username: '',
	password: '',
	image: '',
	accessToken: '',
	PIN: [],
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
		setAccessToken(state, action: PayloadAction<string>) {
			state.accessToken = action.payload
		},
		setPIN(state, action: PayloadAction<string[]>) {
			state.PIN = action.payload
		},
	},
})

export const { setUser, removeUser, setAccessToken, setPIN } = authSlice.actions
export default authSlice.reducer
