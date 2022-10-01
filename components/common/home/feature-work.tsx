import { Work } from '@/models'
import { Box, Container, Typography } from '@mui/material'
import * as React from 'react'
import { ListWork } from '../work'

export  function FeatureWork() {
	const listWork: Work[] = [
		{
			id: 1,
			title: 'Designing Dashboards',
			createAt: '12 Feb 2020',
			shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			fullDescription:	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Design', 'Pattern'],
            updateAt:'12 Feb 2020',
            img:"https://res.cloudinary.com/dxz0pprqo/image/upload/v1664597001/nextjs/item1_ijttb1.jpg"

		},
		{
			id: 2,
			title: 'Vibrant Portraits of 2020',
			createAt: '12 Feb 2020',
			shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			fullDescription:	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Design', 'Pattern'],
            updateAt:'12 Feb 2020',
            img:"https://res.cloudinary.com/dxz0pprqo/image/upload/v1664597001/nextjs/item3_vwhnvs.jpg"
		},
        {
			id: 3,
			title: '36 Days of Malayalam type',
			createAt: '12 Feb 2020',
			shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			fullDescription:	'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            tagList: ['Design', 'Pattern'],
            updateAt:'12 Feb 2020',
            img:"https://res.cloudinary.com/dxz0pprqo/image/upload/v1664597001/nextjs/item2_p4r5jn.jpg"
            
		},
	]
	return (
		<Box  py={4}>
			<Container>
            <Typography  mb={2} variant="h5">Featured works</Typography>
				 <ListWork  listWork={listWork} />
        	</Container>
		</Box>
	)
}
