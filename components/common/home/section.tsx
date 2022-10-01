import { Box, Button, Container, Stack, Typography } from '@mui/material'
import * as React from 'react'
import Image from 'next/image'
import avatar from '../../../images/avatar.png'

export interface SectionProps {}

export function Section(props: SectionProps) {
	return (
		<Box my={{md:8,sx:4}  } >
			<Container>
				<Stack  textAlign={{xs:'center',md:'left'}} alignItems={{xs:'center',md:'flex-start'}}  direction={{md: 'row',xs:'column-reverse'}}>
					<Box pr={4} >
						<Typography
                            component={'h1'}
                            variant={'h3'}
                        >
							Hi, I am John,
							<br />
							Creative Technologist
						</Typography>
						<Typography py={{xs:2,md:4}} >
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
						<Button variant={'contained'}>Download Resume</Button>
					</Box>
					<Box
                        sx={{
                            minWidth:'240px',
                            
                           
                        }}
                    >

                        <Image 
                            src={avatar}
                            layout={'responsive'}
                            alt={"avatar"}
                        
                        />
                            
                    </Box>
				</Stack>
			</Container>
		</Box>
	)
}
