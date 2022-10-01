import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import {Section,RecentPost} from '@/components/common/home'
const Home: NextPageWithLayout = () => {
	const router = useRouter()

	 

	return (
		<Box  >
			<Section />
			<RecentPost />
		 
			 <Typography>Home page</Typography>
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
