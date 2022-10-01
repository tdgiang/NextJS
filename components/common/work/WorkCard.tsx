import { Box, Chip, Stack,Typography } from '@mui/material'
import * as React from 'react'
import Image from 'next/image'
import {Work} from '@/models'


export interface WorkCardProps {
    work:Work
}

export default function WorkCard({work}: WorkCardProps) {
	return (
		<Stack
			direction={{
				xs: 'column',
				md: 'row',
			}}
			spacing={2}
		>
			<Box
				width={{
					xs: '100%',
					md: '246px',
				}}
				flexShrink={0}
                sx={{
                    borderRadius:10
                }}
                 
			>
<Image
    src={work.img}
    width={246}
    height={180}
    layout='responsive'
    alt="work thumbnail"

/>

            </Box>
			<Box>
                <Typography variant={'h5'} fontWeight='bold'  >{work.title}</Typography>
                <Stack
                    direction='row'
                    my={2}
                >
                    <Chip variant="outlined" color="secondary" size='small' 
                    
                        label={work.createAt}
                    />
                    <Typography  sx={{
                        color:"#8695A4"
                    }} ml={3} >{work.tagList.join(",")}</Typography>
                </Stack>
                <Typography variant={'body1'} >{work.shortDescription}</Typography>
            </Box>
		</Stack>
	)
}
