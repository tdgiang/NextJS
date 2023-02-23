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
					description:"ShopMini range of women's and men's clothing for the latest fashion pieces you need to be adding-to-basket, with 100s of new styles landing every day!",
					url:"http://mini.edhub.vn",
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
