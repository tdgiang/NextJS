import { Box ,Container,Stack,Link as MILink} from '@mui/material';
import * as React from 'react';
import {RouteList} from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router';


export interface  HeaderDesktopProps {
}

export default function HeaderDesktop (props:  HeaderDesktopProps) {

  const router=useRouter()

  console.log("router",router.asPath)



  return (
    <Box
      display={{xs:'none',md:"block"}}
      py={2}
    >
      <Container>
        <Stack
          direction={'row'}
          justifyContent={'flex-end'}
        >
        {RouteList.map(e=><Link
          key={e.path}
          href={e.path}
          passHref
        >
        <MILink
        sx={{ml:2,
          color:router.asPath==e.path?'#FF6464':"black",
          fontWeight:'bold'
        }}
        >{e.label}</MILink>
        </Link>)}
        </Stack>
      </Container>
    
    </Box>
  );
}
