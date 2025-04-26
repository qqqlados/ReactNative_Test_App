import { axiosInstance } from '@/lib/axios'
import { IComment, IPost } from '@/lib/types'
import { useQuery } from '@tanstack/react-query'

const getPosts = async () => {
	const response = await axiosInstance.get('/posts')

	return response.data
}

export const usePosts = () => {
	return useQuery<IPost[]>({
		queryKey: ['fetched_posts'],
		queryFn: getPosts,
	})
}

const getPostById = async (id: number) => {
	const response = await axiosInstance.get(`/posts/${id.toString()}`)

	return response.data
}

export const usePostById = (id: number) => {
	return useQuery<IPost>({ queryKey: [`post`, id], queryFn: () => getPostById(id) })
}

const getCommentsByPostId = async (id: number) => {
	const response = await axiosInstance.get(`/posts/${id.toString()}/comments`)

	return response.data
}

export const useCommentsByPostId = (id: number) => {
	return useQuery<IComment[]>({ queryKey: ['comments'], queryFn: () => getCommentsByPostId(id) })
}
