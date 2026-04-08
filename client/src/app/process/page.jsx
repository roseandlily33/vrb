import styles from './page.module.css';
import Hero from '../Components/Hero/Hero.component';
import CTA5 from '../Components/CTA/CTA5/CTA5.component';
export default function Process() {
  return (
    <main>
        <Hero title="My Process" subText="From idea to launch, here's how I build high performing web applications" />
        <CTA5 />
    </main>
  )
}