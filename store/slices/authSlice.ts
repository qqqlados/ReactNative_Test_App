import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
	email?: string
	username: string
	password: string
	image?: string
	accessToken: string
}

const initialState = {
	email: '',
	username: '',
	password: '',
	image: '',
	accessToken: '',
} satisfies UserState as UserState

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<UserState>) {
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
	},
})

export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer
