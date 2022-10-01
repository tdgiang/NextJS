import { Post } from '@/models/index'
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material'
import * as React from 'react'

export interface PostCardProps {
	post: Post
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{post.title}
				</Typography>

				<Stack my={2} direction={'row'}>
					<Typography variant="body1">{post.pushlishedDate}</Typography>
					<Divider
						sx={{
							mx: 2,
						}}
						orientation="vertical"
						flexItem
					/>
					<Typography variant="body1">{post.listTag.join(',')}</Typography>
					


				</Stack>
                <Typography variant="body2">{post.description}</Typography>
			</CardContent>
		</Card>
	)
}
