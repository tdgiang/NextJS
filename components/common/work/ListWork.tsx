import  React,{Fragment} from 'react';
import {Work}  from '@/models'
import { Box, Divider } from '@mui/material';
import WorkCard from './WorkCard'

export interface ListWorkProps {
    listWork:Work[]
}

export function ListWork ({listWork}: ListWorkProps) {

    if (listWork.length===0) return null
  return (
    <Box>
        {listWork.map(work=><Fragment key={work.id} >
           <WorkCard work={work}  />
            <Divider 
               sx={{
                   my:3
               }}
                />
        </Fragment>)}
     
    </Box>
  );
}
