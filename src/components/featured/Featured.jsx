import { CircularProgressbar } from 'react-circular-progressbar';
import { MoreVert } from '@mui/icons-material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import "react-circular-progressbar/dist/styles.css";

import './featured.scss';

const Featured = () => {
  return (
      <div className='featured'>
          <div className="top">
              <h1 className="title">Total Revenue</h1>
              <MoreVert fontSize='small' />
          </div>
          <div className="bottom">
              <div className="featured-chart">
                  <CircularProgressbar value={70} text={'70%'} strokeWidth={3} />
              </div>
              <p className="title">Total sales made today</p>
              <p className="amount">$420</p>
              <p className="desc">Previous transactions processing. Last payments may not included.</p> 

              <div className="summary">
                  <div className="item">
                    <div className="item-title">Target</div>
                    <div className="item-result">
                        <KeyboardArrowDown fontSize='small' />
                        <div className="result-amount">$12.4k</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-title">Last Week</div>
                    <div className="item-result positive">
                        <KeyboardArrowUp fontSize='small' />
                        <div className="result-amount">$12.4k</div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-title">Last Month</div>
                    <div className="item-result positive">
                        <KeyboardArrowUp fontSize='small' />
                        <div className="result-amount">$12.4k</div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Featured