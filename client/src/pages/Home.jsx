import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
          <motion.section className='home' {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
               <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
               <motion.div  {...headTextAnimation}>
                  <h1 className="head-text">
                     LET'S <br className='xl:block hidden' /> DO IT.
                  </h1>
               </motion.div>
               < motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                  <p className="max-w-md font-normal text-gray-600">
                  当社の新機能の 3D カスタマイズ ツールを使って、自分だけの特別なシャツを作りましょう。
                  <strong>想像力を解き放ち、</strong>{" "} <br /> 自分だけのスタイルを追求しましょう.
                  </p>
                  <CustomButton 
                    type="filled"
                    title="Get Started"
                    handleClick={() => state.intro = false}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  />
               </motion.div>
            </motion.div>
          </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home