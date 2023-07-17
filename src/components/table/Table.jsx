import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.scss';


const TableForm = () => {

    const rows = [
        {
            id: 1,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 1,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Pending'
        },
        {
            id: 2,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 3,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 4,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Pending'
        },
        {
            id: 5,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 6,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 7,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 8,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 9,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 10,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 11,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 12,
            product: 'Acer Nitro',
            img: 'https://i.postimg.cc/3RVqb32t/image11.jpg',
            customer: 'Tamale Frank',
            date: '1 March',
            amount: 1000,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
    ]

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='table-cell'>Tracking ID</TableCell>
            <TableCell className='table-cell'>Product</TableCell>
            <TableCell className='table-cell'>Customer</TableCell>
            <TableCell className='table-cell'>Date</TableCell>
            <TableCell className='table-cell'>Amount</TableCell>
            <TableCell className='table-cell'>Payment Method</TableCell>
            <TableCell className='table-cell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='table-cell'>{row.id}</TableCell>
              <TableCell className='table-cell'>
                <div className="cell-wrapper">
                    <img src={row.img} alt="product image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='table-cell'>{row.customer}</TableCell>
              <TableCell className='table-cell'>{row.date}</TableCell>
              <TableCell className='table-cell'>{row.amount}</TableCell>
              <TableCell className='table-cell'>{row.method}</TableCell>
              <TableCell className='table-cell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default TableForm