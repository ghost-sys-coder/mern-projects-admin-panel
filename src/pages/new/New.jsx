import { useState, version } from 'react';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

import { SideBar, Navbar } from '../../components';

import './new.scss';

const New = ({ title, inputs }) => {
  const [file, setFile] = useState('');
  console.log(file);
  return (
    <div className='new'>
      <SideBar />
      <div className="new--container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://i.postimg.cc/1zzYm8HW/image6.jpg"
              }
              alt="empty"
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className='icon' />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                  onChange={(event) => setFile(event.target.files[0])}
                />
              </div>
              {inputs?.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New