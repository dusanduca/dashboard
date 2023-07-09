import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./styles.module.css";





interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>

        
          <Header/>
          <main>{children}</main>
          <Footer/>
        
      </div>
      
    </>
  );
}
