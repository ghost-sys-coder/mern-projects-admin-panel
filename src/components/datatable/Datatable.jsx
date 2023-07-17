import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

import './datatable.scss';

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={'/users/test'}>
              <div className="view-button">View</div>
            </Link>
            <Link to={''}>
              <div onClick={() => handleDelete(params.row.id)} className="delete-button">Delete</div>
            </Link>
          </div>
        )
      }
    }
  ]
  
  return (
    <div className="datatable">
      <div className="datatable-title">
        Add New User
        <Link to={'/users/new'} className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
        className='specifics datagrid'
      />
    </div>
  )
}

export default Datatable