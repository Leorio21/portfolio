import Image from 'next/image'
import styles from './page.module.css'
import AnimatedText from './Components/AnimatedText/AnimatedText'

export default function Home() {

  return (
      <div className={styles.container}>
        <AnimatedText in_textStart="${name}" in_textEnd="Jérôme LEFEUVRE" />
        <AnimatedText in_textStart="${profession}" in_textEnd="Développeur Web" in_startDelay={500} />
      </div>
  )
}
