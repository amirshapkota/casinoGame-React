import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const List = () => {

    const rows = [
        {
            id: 1,
            game: "Crash",
            img:"./images/crash.jpg",
            player: "John",
            betamount: "500",
            wonamount: "900",
            profit: "400",
            status: "Profit",
        },
        {
            id: 2,
            game: "Dice",
            img:"./images/dice.jpg",
            player: "Johnny",
            betamount: "200",
            wonamount: "400",
            profit: "200",
            status: "Profit",
        },
        {
            id: 3,
            game: "Tower",
            img:"./images/towers.jpg",
            player: "Ram",
            betamount: "1500",
            wonamount: "1100",
            profit: "400",
            status: "Loss",
        },
    ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Game</TableCell>
            <TableCell className='tableCell'>Player</TableCell>
            <TableCell className='tableCell'>Bet Amount</TableCell>
            <TableCell className='tableCell'>Won Amount</TableCell>
            <TableCell className='tableCell'>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.game}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.player}</TableCell>
              <TableCell className='tableCell'>{row.betamount}</TableCell>
              <TableCell className='tableCell'>{row.wonamount}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.profit}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
