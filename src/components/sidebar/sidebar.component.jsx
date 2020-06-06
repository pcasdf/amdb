import React from 'react';

import { useStyles } from './sidebar.styles';
import SidebarItem from '../sidebar-item/sidebar-item.component';

const Sidebar = () => {
  const { root, title } = useStyles();
  return (
    <div className={root}>
      <span className={title}>TOP RATED</span>
      <div style={{ marginTop: '10px' }}>
        <SidebarItem id='1' title='Movies' url='/top/movie' />
        <SidebarItem id='2' title='TV Series' url='/top/tv' />
      </div>
      <span className={title}>TRENDING</span>
      <div style={{ marginTop: '10px' }}>
        <SidebarItem id='3' title='Movies' url='/trending/movie/week' />
        <SidebarItem id='4' title='TV Series' url='/trending/tv/week' />
      </div>
      <span className={title}>GENRES</span>
      <div style={{ marginTop: '10px' }}>
        <SidebarItem id='5' title='Action' url='/genre/action/28' />
        <SidebarItem id='6' title='Adventure' url='/genre/adventure/12' />
        <SidebarItem id='7' title='Animation' url='/genre/animation/16' />
        <SidebarItem id='8' title='Comedy' url='/genre/comedy/35' />
        <SidebarItem id='9' title='Documentary' url='/genre/documentary/99' />
        <SidebarItem id='10' title='Drama' url='/genre/drama/18' />
        <SidebarItem id='11' title='Family' url='/genre/family/10751' />
        <SidebarItem id='12' title='Fantasy' url='/genre/fantasy/14' />
        <SidebarItem id='13' title='Horror' url='/genre/horror/27' />
        <SidebarItem id='14' title='Mystery' url='/genre/mystery/9648' />
        <SidebarItem id='15' title='Romance' url='/genre/romance/10749' />
        <SidebarItem id='16' title='Science Fiction' url='/genre/scifi/878' />
        <SidebarItem id='17' title='Thriller' url='/genre/thriller/53' />
      </div>
    </div>
  );
};

export default Sidebar;
