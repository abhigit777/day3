import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>  
            </TableHead>

            
             <TableBody>
                <TableRow>
                    <TableCell>Abhi</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>EKM</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Abhi</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>EKM</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Abhi</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>EKM</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Abhi</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>EKM</TableCell>
                </TableRow>
            </TableBody>
            
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tab 
