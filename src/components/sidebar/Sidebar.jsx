import React from 'react'
import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CircleIcon from '@mui/icons-material/Circle';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StyleIcon from '@mui/icons-material/Style';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import MoneyIcon from '@mui/icons-material/Money';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import ScaleIcon from '@mui/icons-material/Scale';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
          <span className="logo">casinoGame</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <GridViewIcon className='icon' />
              <span>Home</span>
            </li>
            <p className="title">BEST</p>
            <li>
              <SportsEsportsIcon className='icon' />
              <span>Games</span>
            </li>
            <li>
              <CircleIcon className='icon' />
              <span>Spin</span>
            </li>
            <li>
              <LocalFireDepartmentIcon className='icon' />
              <span>Hot Today</span>
            </li>
            <li>
              <MoneyIcon className='icon' />
              <span>Lottery</span>
            </li>
            <p className="title">BE PART</p>
            <li>
              <StyleIcon className='icon' />
              <span>Promotions</span>
            </li>
            <li>
              <WifiTetheringIcon className='icon' />
              <span>Refferal</span>
            </li>
            <li>
              <AccountCircleOutlinedIcon className='icon' />
              <span>Login/Register</span>
            </li>
            <p className="title">INFORMATION</p>

            <li>
              <InfoIcon className='icon' />
              <span>About</span>
            </li>
            <li>
              <ArticleIcon className='icon' />
              <span>Terms and Conditions</span>
            </li>
            <li>
              <ScaleIcon className='icon' />
              <span>Fair Usages</span>
            </li>
            <li>
              <DocumentScannerIcon className='icon' />
              <span>WhitePapers</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}
