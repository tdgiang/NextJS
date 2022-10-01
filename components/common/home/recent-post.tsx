import { Box, Container, Stack, Typography, Link as MILink } from '@mui/material'
import * as React from 'react'
import Link from 'next/link'
import PostCard from './postcard'
import { Post } from '@/models'
export interface RecentPostProps {}

export function RecentPost(props: RecentPostProps) {
	const listPost: Post[] = [
		{
			id: 1,
			title: 'Making a design system from scratch',
			pushlishedDate: '12 Feb 2020',
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			listTag: ['Design', 'Pattern'],
		},
		{
			id: 2,
			title: 'Creating pixel perfect icons in Figma',
			pushlishedDate: '22 Feb 2020',
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			listTag: ['Design', 'Pattern'],
		},
	]
	return (
		<Box bgcolor="primary.light" py={4}>
			<Container>
				<Stack mb={2} direction={'row'} alignItems="center" justifyContent="space-between">
					<Typography variant="h5">Recent posts</Typography>
					<Link href={'/blog'} passHref>
						<MILink display={{ xs: 'none', md: 'inline-block' }}>View all</MILink>
					</Link>
				</Stack>

				<Stack
					direction={{
						xs: 'column',
						md: 'row',
					}}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
					spacing={3}
				>
					{listPost.map((post) => (
						<Box key={post.id}>
							<PostCard post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
