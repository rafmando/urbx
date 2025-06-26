import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";
import Footer from './ui/footer'
import { Container } from "react-bootstrap";

export default function Page() {
  return (
    <div>
      <Header/>
        <main className="py-3">
          <Container>
            <h1>WElcome</h1>
          </Container>
        </main>
      <Footer/>
    </div>
  );
}
