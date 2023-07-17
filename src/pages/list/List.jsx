import { Datatable, Navbar, SideBar } from '../../components';
import './list.scss';

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className="list--container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List