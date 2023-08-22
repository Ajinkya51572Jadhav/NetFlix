import Image from 'next/image'
import styles from './page.module.css'
import { Fragment } from 'react'
import Herosection from './components/Herosection'

export default function Home() {
  return (
      <Fragment>
              <Herosection title={`LET's WATCH MOVIE TOGETHER`} videoURL={"https://res.cloudinary.com/duzvvywub/video/upload/v1692593349/mad_dce8tf.mp4"}  />  
      </Fragment>
    )
}
