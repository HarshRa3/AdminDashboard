import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PaidIcon from '@mui/icons-material/Paid';
import ReportIcon from '@mui/icons-material/Report';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
export const data=[{
    title:'pages',
    list:[
        {title:'Dashboard',path:'/dashboard',icon:<DashboardIcon/>},
        {title:'Users',path:'/dashboard/users',icon:<SupervisedUserCircleIcon/>},
        {title:'Product',path:'/dashboard/products',icon:<ProductionQuantityLimitsIcon/>},
        {title:'Transaction',path:'/dashboard/transaction',icon:<PaidIcon/>},
    ]
},{
    title:'Analytics',
    list:[
        {title:'Revenue',path:'/dashboard/revenue',icon:<DashboardIcon/>},
        {title:'Reports',path:'/dashboard/reports',icon:<ReportIcon/>},
        {title:'Teams',path:'/dashboard/teams',icon:<GroupsIcon/>},
    ]
},
{
    title:'Users',
    list:[
        {title:'Settings',path:'/dashboard/settings',icon:<SettingsSuggestIcon/>},
        {title:'Helps',path:'/dashboard/help',icon:<HelpCenterIcon/>},
    ]
},
]