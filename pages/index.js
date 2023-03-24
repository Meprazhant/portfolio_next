import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Monitor from '../comps/Monitor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  var router = useRouter()

  return (
    <div >
      <Head>
        <title>Prashant | Home</title>
        <meta name="description" content="Prashant Kafle, a student of Mechi multiple Campus, a Full stack developer, a BCA undergraduate student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Monitor />


    </div >
  )
}
