
import React from 'react';
import { Routes, Route,Link } from 'react-router-dom';
import { Space,Typography } from 'antd';
import './App.css';
import { Navbar } from './components';
import { Category, Search, HomePage, Trending } from './pages';


const App = () => {
  return (
    <section className='App'>
      <section className='nav-container'>
        <Navbar />
      </section>
      <section className='main'>
        <div className='route' style={{minHeight:"85vh"}}>
          <Routes>
            <Route path='/trending' element={<Trending />} />
            <Route path='/category' element={<Category />} />
            <Route path='/search' element={<Search />} />
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Typography.Title>Sorry Some Error Please Try out Later</Typography.Title>} />
          </Routes>
        </div>
        <div className='footer'>
            <Typography.Title level={5} style={{"color":"white", "textAlign":"center"}}>
                  Daily News
                  <br/>
                  All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/Category">Category</Link>
              <Link to="/trending">Trending</Link>
              <Link to="/search">Search</Link>
            </Space>
        </div>
      </section>
    </section>
  )
}

export default App