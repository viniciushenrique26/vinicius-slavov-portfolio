"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#146ef5] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#146ef5] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Skills
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[100px] text-black font-bold mt-[10px] text-center mb-[5px]'
        >
            Planeje, codifique e encante
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-800 mb-10 mt-[10px] text-center'
        >
            Tirando as suas melhores ideias do papel, com o que há de melhor no mercado.
        </motion.div>
    </div>
  )
}

export default SkillText