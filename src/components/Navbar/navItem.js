import { HomeOutlined, FireOutlined, BarsOutlined, SearchOutlined } from '@ant-design/icons';
 
 export const links = [
    {
        path:'/',
        icon:<HomeOutlined/>,
        text:'Home'
    },
    {
        path:'/trending',
        icon:<FireOutlined/>,
        text:'Trending'
    },
    {
        path:'/category',
        icon:<BarsOutlined/>,
        text:'Category'
    },
    {
        path:'/search',
        icon:<SearchOutlined/>,
        text:"Search.."
    }
]