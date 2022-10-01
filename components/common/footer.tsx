import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box ,Typography,Icon, Stack} from '@mui/material'
import * as React from 'react'


export function Footer( ) {
    const listSocical=[
        {
            icon:Facebook,
        },
        {
            icon:Instagram,
        },
        {
            icon:Twitter,
        },
        {
            icon:LinkedIn,
        },
    ]
	return <Box className="footer"  textAlign={'center'}  py={2} >
        <Stack
            direction={'row'}
            justifyContent={'center'}
            my={2}
        >
        {listSocical.map((e,i)=>(<Box component={"a"}
    href={"https://github.com/tdgiang/NextJS"}
    target={"_blank"}
    rel={"noopener noreferrer"}

         key={i} >
            <Icon component={e.icon} sx={{
                mx:2
            }} fontSize="large" />
        </Box>))}
        </Stack>
       
        
    <Typography variant={'body2'} >Copyright ©2022 All rights reserved </Typography>

    </Box>
}
