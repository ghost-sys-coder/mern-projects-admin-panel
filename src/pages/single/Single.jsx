import { SideBar, Navbar, Chart, TableForm } from '../../components';

import './single.scss';

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className="single--container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.postimg.cc/fbjTT73N/image3.jpg"
                alt="avatar"
                className='item--image'
              />
              <div className="details">
                <h1 className="item--title">Jane Doe</h1>
                <div className="detail--item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">Janedoe@gmail.com</span>
                </div>
                <div className="detail--item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+256750242627</span>
                </div>
                <div className="detail--item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">Lubowa, Terrace</span>
                </div>
                <div className="detail--item">
                  <span className="item-key">Country</span>
                  <span className="item-value">Uganda</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title='User Spending (Last 6 Months)'
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableForm />
        </div>
      </div>
    </div>
  )
}

export default Single