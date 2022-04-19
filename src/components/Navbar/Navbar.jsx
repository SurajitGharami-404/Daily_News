import React, { useEffect,useState,memo } from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import useToggle from '../../hooks/useToggle';
import {links} from './navItem';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {

    const [isMobile,setIsMobile] = useState(false);
    const [screenSize,setScreenSize] = useState(null);
    const [menu,toggleMenu] = useToggle(false);

    useEffect(()=>{
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        handleResize();

        return window.removeEventListener('resize',handleResize)
    },[])

    useEffect(()=>{
        if(screenSize<800){
            setIsMobile(true)
        }
        else if (screenSize>800){
            setIsMobile(false)
        }

    },[screenSize])


    const { Title } = Typography;
    const cName = (navData) => (`${styles.link} ${navData.isActive&&styles.active}`);
    

    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <Title level={2} className={styles.title}>Daily<span>.</span></Title>
            </Link>
            <ul className={`${styles.navMenu} ${menu&&styles.show}`} onClick={()=>{isMobile&&toggleMenu()}}>
                {links.map((link,idx)=>(
                    <li key={idx}><NavLink to={link.path} className={cName}><span>{link.icon}</span> {link.text}</NavLink></li>
                ))}
            </ul>

            {
                isMobile&&(
                    <div className={styles.mobileContainer} onClick={()=>toggleMenu()}>
                        {menu?<CloseOutlined/>:<MenuOutlined/>}
                    </div>
                )
            }
        </nav>
    )
}

export default memo(Navbar);