'use client'
import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppConfig } from '@/context/AppContext';
export const Markets = () => {
const {convert} = useContext(AppConfig);

  return (
    <div className='bg-[#0A0634] w-[523px] h-[597px] rounded-lg'>
<div className='font-inter font-bold text-[30px] mt-4 p-4 ml-2'>Markets</div>
<div className='flex flex-row justify-center'>
<TableContainer className='mt-2 w-[450px]' component={Paper}>
      <Table aria-label="simple table">
      
        <TableBody>
          {convert&& Object.keys(convert).map((v,k)=>{
            if(v!='USD'){
                return(<TableRow className='text-white'
                key={k}
             
              >
                <TableCell align='left'>
                 USD/{v} 
                </TableCell>
               
                <TableCell align="right">{convert[v].price}</TableCell>
               
            
              </TableRow>)
            }
          

          }
            
          )}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    </div>
  )
}
