import React, { memo, useEffect } from 'react'

import {
  DiscoverWrapper,
  TopMenu
} from './style'

import request from '@/services/request'

import { discoverMenu } from "@/common/local-data";
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default memo(function ZHDiscover(props) {

  const { route } = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
