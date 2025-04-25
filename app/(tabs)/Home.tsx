import { PostItemUI } from '@/components/ui/PostItemUI'
import { Colors, Radius } from '@/constants/styles'
import { getUser, loginUser } from '@/lib/auth'
import { usePosts } from '@/services/posts.service'
import { setUser } from '@/store/slices/authSlice'
import { RootState } from '@/store/store'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
	const { data: posts, isLoading } = usePosts()

	const [loading, setLoading] = useState(true)

	const dispatch = useDispatch()

	const user = useSelector((state: RootState) => state.auth)

	useEffect(() => {
		const fetchUser = async () => {
			const fetchedUser = await getUser()
			console.log(fetchedUser)

			if (fetchedUser) {
				dispatch(setUser({ email: fetchedUser.email, username: fetchedUser.username, password: '123111', image: fetchedUser.image }))
			}
			setLoading(false)
		}

		if (!user.username) {
			fetchUser()
		}
	}, [])

	return (
		<ScrollView>
			<View>
				<View style={styles.top_section}>
					<Text style={{ color: '#fff', fontSize: 13 }}>Your name</Text>
					<Text style={{ color: '#fff', fontSize: 28, fontWeight: '700' }}> {user.username}</Text>
				</View>

				<View style={styles.go_to_call}>
					<View style={styles.go_to_call_text}>
						<Text style={{ fontWeight: '500' }}>Test task</Text>
						<Text style={{ fontSize: 13, fontWeight: '400', color: Colors.secondary }}>Lorem ipsum</Text>

						<View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
							<Link style={styles.go_to_call_link} href={'/#'}>
								Go to call
							</Link>

							<Image
								source={require('../../assets/images/arrow-dropdown_blue.png')}
								width={7}
								height={14}
								style={{ position: 'absolute', right: 40, top: 20 }}
							/>
						</View>
					</View>

					<Image source={require('../../assets/images/blue_rectangle.png')} width={127} height={127} />
				</View>

				<View style={styles.before_you_start}>
					<Text style={styles.heading}>Before you Start</Text>

					<ScrollView horizontal={true}>
						<View style={{ flexDirection: 'row', gap: 16 }}>
							<View style={styles.pillow_container}>
								<View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
									<Image source={require('../../assets/images/before_you_start.png')} width={48} height={48} />

									<View>
										<Text style={{ color: '#fff', marginBottom: 4 }}>Link you Bank</Text>
										<Text style={{ color: '#fff' }}>Account</Text>
									</View>
								</View>

								<View style={{ paddingLeft: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
									<Text style={{ color: '#fff' }}>2 steps</Text>

									<Image source={require('../../assets/images/arrow_left.png')} />
								</View>
							</View>

							<View style={[styles.pillow_container, styles.pillow_container_second]}>
								<View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
									<Image source={require('../../assets/images/before_you_start.png')} width={48} height={48} />

									<View>
										<Text style={{ color: '#06070A' }}>Add funds to your wallet</Text>
									</View>
								</View>

								<View style={{ paddingLeft: 8 }}>
									<Text>3 steps</Text>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>

				<View style={styles.posts}>
					<Text style={styles.heading}>Posts</Text>

					<View style={styles.posts_container}>
						{posts && posts.length > 0 && posts?.slice(0, 3).map((post, index) => <PostItemUI key={post.id} post={post} />)}
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	heading: {
		color: Colors.secondary,
		marginBottom: 8,
	},
	top_section: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 296,
		backgroundColor: Colors.orange,
		borderBottomLeftRadius: Radius.r28,
		borderBottomRightRadius: Radius.r28,
		marginBottom: 24,
	},
	go_to_call: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		backgroundColor: '#fff',
		borderRadius: Radius.r16,
		marginBottom: 32,
	},
	go_to_call_text: {
		flexBasis: '55%',
		paddingVertical: 29,

		gap: 4,
	},
	go_to_call_link: {
		marginTop: 24,
		color: '#009E81',
	},
	before_you_start: {},
	pillow_container: {
		justifyContent: 'space-between',
		height: 150,
		width: 230,
		borderRadius: Radius.r16,
		backgroundColor: '#636363',
		paddingHorizontal: 16,
		paddingBottom: 16,
		paddingTop: 27,
	},
	pillow_container_second: {
		height: 150,
		width: 230,
		borderRadius: Radius.r16,
		backgroundColor: '#EE6363',
		paddingHorizontal: 16,
		paddingBottom: 16,
		paddingTop: 27,
	},
	posts: {
		marginVertical: 32,
	},
	posts_container: {
		gap: 8,
	},
})
