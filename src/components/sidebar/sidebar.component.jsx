import React from 'react';

import { useStyles } from './sidebar.styles';
import SidebarItem from '../sidebar-item/sidebar-item.component';

const Sidebar = () => {
  const { root, title } = useStyles();
  return (
    <div className={root}>
      <span className={title}>TOP RATED</span>
      <div style={{ marginTop: '10px' }}>
        <SidebarItem title='Movies' url='/top/movie' />
        <SidebarItem title='TV Series' url='/top/tv' />
      </div>
      <span className={title}>TRENDING</span>
      <div style={{ marginTop: '10px' }}>
        <SidebarItem title='Movies' url='/trending/movie/week' />
        <SidebarItem title='TV Series' url='/trending/tv/week' />
      </div>
      <span className={title}>GENRES</span>
      <div style={{ marginTop: '10px' }}>
        <SidebarItem title='Action' url='/genre/action/28' />
        <SidebarItem title='Adventure' url='/genre/adventure/12' />
        <SidebarItem title='Animation' url='/genre/animation/16' />
        <SidebarItem title='Comedy' url='/genre/comedy/35' />
        <SidebarItem title='Documentary' url='/genre/documentary/99' />
        <SidebarItem title='Drama' url='/genre/drama/18' />
        <SidebarItem title='Family' url='/genre/family/10751' />
        <SidebarItem title='Fantasy' url='/genre/fantasy/14' />
        <SidebarItem title='Horror' url='/genre/horror/27' />
        <SidebarItem title='Mystery' url='/genre/mystery/9648' />
        <SidebarItem title='Romance' url='/genre/romance/10749' />
        <SidebarItem title='Science Fiction' url='/genre/scifi/878' />
        <SidebarItem title='Thriller' url='/genre/thriller/53' />
      </div>
    </div>
  );
};

export default Sidebar;
