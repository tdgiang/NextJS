import { Box, Container, Stack, Typography,Link as MILink } from '@mui/material';
import * as React from 'react';
import Link from 'next/link'
import PostCard from './postcard'
export interface  RecentPostProps {
}

export function RecentPost (props:  RecentPostProps) {
  return (
    <Box bgcolor="primary.light"  py={4} >
        <Container
        
        >
            <Stack
            mb={2}
            direction={'row'}
                alignItems='center'
                justifyContent='space-between'
            >
                <Typography  variant='h5' >Recent posts</Typography>
                <Link
                 href={'/blog'}
                 passHref
                >
                <MILink  display={{xs:'none',md:'inline-block'}}  >View all</MILink>
                </Link>
            </Stack>

            <Stack
            direction={{
                xs:'column',
                md:'row'
            }}
            sx={{
                '& > div':{
                    width:{
                        xs:'100%',
                        md:'50%'
                    }
                }
            }}
            spacing={3}
            >

            <Box>
                <PostCard />

            </Box>


            <Box>
            <PostCard />
            </Box>

            </Stack>
        </Container>
      
    </Box>
  );
}
