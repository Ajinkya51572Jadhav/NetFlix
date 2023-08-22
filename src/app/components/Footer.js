"use client";


import React, { Fragment } from 'react'
import "@/app/globals.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import  LinkedinIcon from "@material-ui/icons/LinkedIn"  
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from 'next/link';

const Footer = () => {
  return (
    <Fragment>
    <footer>
   
    <div>
    <GitHubIcon/>
    <Link href={"https://github.com/Ajinkya51572Jadhav"}>Github</Link>
    </div>

    <div>
     <LinkedinIcon/>
    <Link href={"https://www.linkedin.com/in/ajinkya-jadhav-a2665623b/"}>LinkedIn</Link>
    </div>

    <div>
    <InstagramIcon/>
    <Link href={"https://www.instagram.com/Ajinkya_Jadhav_77777/"}>Instagram</Link>
    </div>


    </footer>
    </Fragment>
  )
}

export default Footer