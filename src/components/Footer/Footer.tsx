import { navigate } from '@jaenjs/jaen'
import { Link } from '@mui/material'
import { useLocation } from '@reach/router'
import clsx from 'clsx'
import React from 'react'
import { getLangRootNavigationPath } from '../../common/getLangRootNavigationPath'
import MaxWidthContainer from '../Layout/MaxWidthContainer'

interface FooterProps {
  alwaysAtBottom?: boolean
}

export default function Footer({alwaysAtBottom}: FooterProps) {
  const location = typeof window !== 'undefined' ? useLocation() : null

  return (
    <footer
      className={clsx('flex justify-center py-10 px-8 md:px-16', {
        'absolute bottom-0 left-0': alwaysAtBottom
      })}>
      <MaxWidthContainer>
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
          <div>
            <p className={'font-bold'}>Links</p>
            <div className="flex space-x-14">
              <div className="flex flex-col space-y-4 mt-3">
                <a
                  onClick={() =>
                    navigate(getLangRootNavigationPath(location?.pathname, '/'))
                  }
                  className="cursor-pointer">
                  Home
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      getLangRootNavigationPath(location?.pathname, '/login')
                    )
                  }>
                  Log in
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      getLangRootNavigationPath(location?.pathname, '/signup')
                    )
                  }>
                  Sign up
                </a>
              </div>
              <div className="flex flex-col space-y-4 mt-3">
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      getLangRootNavigationPath(
                        location?.pathname,
                        '/how-to-guides'
                      )
                    )
                  }>
                  Documentation
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      getLangRootNavigationPath(location?.pathname, '/legal')
                    )
                  }>
                  Terms & Conditions
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    navigate(
                      getLangRootNavigationPath(
                        location?.pathname,
                        '/impressum'
                      )
                    )
                  }>
                  Impressum
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className={'font-bold'}>Partners</p>
            <div className="flex space-x-14">
              <div className="flex flex-col space-y-4 mt-3">
                <Link href="https://www.cdg.ac.at/" style={{color: '#FFF'}}>
                  <a target="_blank" className="cursor-pointer">
                    Christian Doppler Forschungsgesellschaft (CDG)
                  </a>
                </Link>
                <Link href="https://www.univie.ac.at/" style={{color: '#FFF'}}>
                  <a target="_blank" className="cursor-pointer">
                    University of Vienna
                  </a>
                </Link>
                {/* <Link href="https://www.tencent.com/" style={{color: '#FFF'}}>
                  <a target="_blank" className="cursor-pointer">
                    Tencent Mobility Limited
                  </a>
                </Link> */}
              </div>
              {/*}
              <div className="flex flex-col space-y-4 mt-3">
                <Link href="https://www.univie.ac.at/">
                  <a target="_blank" className="cursor-pointer">
                    Partner 3
                  </a>
                </Link>
                <Link href="https://www.univie.ac.at/">
                  <a target="_blank" className="cursor-pointer">
                    Partner 4
                  </a>
                </Link>{" "}
                <Link href="https://www.univie.ac.at/">
                  <a target="_blank" className="cursor-pointer">
                    Partner 5
                  </a>
                </Link>
              </div>
      */}
            </div>
          </div>
          <address>
            <p className={'font-bold'}>PhotonQ is brought to you by</p>
            <p>Christian Doppler Laboratory for Photonic Quantum Computing</p>
            <p>Walther Group</p>
            <p>Faculty of Physics, University of Vienna</p>
          </address>
        </div>
        <hr className="my-4" />
        <div className="flex">
          <p>
            Copyright © 2022 Walther Group, Faculty of Physics, University of
            Vienna. All rights reserved.
          </p>
        </div>
      </MaxWidthContainer>
    </footer>
  )
}
