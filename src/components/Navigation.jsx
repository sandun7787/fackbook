import React from 'react'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import"./navBar.css"
export default function Navigation() {
  return (
    <div className="navBarBox">
        <div className="navBarLef">
            <span className="logo">FackBook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
            <TravelExploreIcon className='searchicon'/>
            <input placeholder='search for u friend' className="searchinput" />

            </div>
        </div>
        <div className="navBarRight">
          <div className="navBarLinks">
            <span className="navBarLinks">homepage</span>
            <span className="navBarLink">profile</span>
          </div>
          <div className="navBarIcons">
            <div className="navBaricon">
            <PersonAddIcon/>
            <span className="icontag">3</span>
            </div>
            <div className="navBaricon">
            <MessageIcon/>
            <span className="icontag">10</span>
              </div>
              <div className="navBaricon">
              <SettingsApplicationsIcon/>
              <span className="icontag">100</span>
              </div>
          </div>
        </div>
        <div className="pic">
        <img src="/images/1.jpg" alt="" className="profilrpicimage" />
        </div>
        
    </div>
  )
}
