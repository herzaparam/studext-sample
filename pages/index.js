import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import CardCourseP from '../src/components/CardCourseP'
import CardRank from '../src/components/CardRank'
import HorizontalScroll from 'react-scroll-horizontal'
import Stories from '../src/components/Stories'
import Chart from '../src/components/Chart'

export default function Home() {
 
  return (
    <div className={styles["container"]}>
      <Head>
        <title>Studext - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles["main"]}>
        <div className={styles["main-left"]}>
          <div className={styles["story"]} >
            <h3>Story</h3>
            <HorizontalScroll className="scroll" reverseScroll={true} >
              <Stories name="Herza"/>
              <Stories name="Parama"  />
              <Stories name="Yudhanto" />
              <Stories name="Sebastian" />
              <Stories name="Immanuel" />
              <Stories name="Michael" />
              <Stories name="Suroso" />
              <Stories name="Anton" />
              <Stories name="Alex" />
              <Stories name="cassandra" />
              <Stories name="Norman" />
              <Stories name="Rian" />
              <Stories name="Johan" />
              <Stories name="Amer" />
              <Stories name="Kuroky" />
              <Stories name="Desy" />
              <Stories name="Carin" />
              <Stories name="Bella" />
              <Stories name="Reynold" />
              <Stories name="Zayn" />
            </HorizontalScroll>
          </div>
          <div className={styles["statistics"]}>
            <h3>Statistics</h3>
            <Chart />
          </div>
        </div>
        <div className={styles["main-right"]}>
          <div className={styles["main-right-top"]}>
            <h3>Peringkat</h3>
            <p>Hasil akhir perolehan nilai try out</p>
            <div className={styles["btn-group-download"]}>
              <img src="/icon download.png" alt="" />
              <button>Unduh .csv</button>
            </div>
            <img src="throphy.png" alt="" />
          </div>
          <div className={styles["main-right-bot"]}>
            <CardRank className="container-1" />
            <CardRank className="container-2" />
            <CardRank className="container-3" />
            <CardRank className="container-4" />
            <CardRank className="container-4" />
            <CardRank className="container-4" />
            <CardRank className="container-4" />
          </div>

        </div>
      </main>
      <section className={styles["bot"]}>
        <h3>Course Preview</h3>
        <div className={styles["card-slide"]}>
          <CardCourseP />
          <CardCourseP />
          <CardCourseP />
          <CardCourseP />
          <CardCourseP />
          <CardCourseP />
          <CardCourseP />
          <CardCourseP />
        </div>
      </section>



    </div>
  )
}
