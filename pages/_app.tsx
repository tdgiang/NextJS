import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models/index'
import axiosClient from 'api-client/axios-client'
import { SWRConfig } from 'swr'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import {theme,createEmotionCache} from '../utils/index'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps  }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout

	return (
		<CacheProvider value={clientSideEmotionCache} >
			<ThemeProvider  theme={theme} >
				<CssBaseline />

		<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
		</ThemeProvider>
		</CacheProvider>
	)
}
export default MyApp
