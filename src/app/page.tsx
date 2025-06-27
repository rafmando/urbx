import Image from 'next/image'
import styles from './page.module.css'
import { Container } from 'react-bootstrap'
import Splash from './ui/splash'

export default function Page() {
  return (
    <div>
      <main className="py-3">
        <Container>
          <Splash />
        </Container>
      </main>
    </div>
  )
}
