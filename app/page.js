import page from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={page.container}>
        <div className={page.innerContainer}>
          <h1 className={page.title}>FITNESS DAILY</h1>

          <p className={page.content}>
            If you want to work out in the gym and gain muscle, you`&apos`ve
            come to the correct place. The owners of this blog are fitness
            enthusiasts who have been training for a long time and wish to share
            with you their knowledge and successes. You will learn how to
            maintain a regular schedule, eat healthily, and exercise efficiently
            here. You will discover something interesting and helpful here
            whether you are a novice or an expert user. Join us as we walk you
            through the process of achieving your fitness objectives and
            enhancing your mental and physical well-being.
          </p>

          <h5 className={page.h5}>Developled By: Southwane</h5>
        </div>
      </section>
    </main>
  );
}
