import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import {Section,RecentPost,FeatureWork} from '@/components/common/home'
import {Seo}  from '@/components/common/index'
const Home: NextPageWithLayout = () => {
	const router = useRouter()

	 

	return (
		<Box  >
			<Seo 
				data={{
					title:"NextJS tutotials | DG",
					description:"Turorial learn next js in 8 hour",
					url:"https://github.com/tdgiang/NextJS",
					thumbnaiUrl:"https://res.cloudinary.com/dxz0pprqo/image/upload/v1664597001/nextjs/item3_vwhnvs.jpg"

				}}
			/>
			<Section />
			<RecentPost />
			<FeatureWork />
		 
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
