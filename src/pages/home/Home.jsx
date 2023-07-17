
import { Chart, Featured, Navbar, SideBar, TableForm, Widget } from '../../components';

import './home.scss';

const Home = () => {
  return (
      <div className='home'>
          <SideBar />
          <div className="home--container">
              <Navbar />
              <div className="widgets">
                  <Widget type="user" />
                  <Widget type="order" />
                  <Widget type="earnings" />
                  <Widget type="balance" />
              </div>
              <div className="charts">
                  <Featured />
                  <Chart aspect={2 / 1} title={'Last 6 Months (Revenue)'} />
              </div>
              <div className="list--container">
                  <div className="list-title">Latest Transactions</div>
                  <TableForm />
              </div>
          </div>
    </div>
  )
}

export default Home