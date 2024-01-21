import page from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={page.container}>
        <div className={page.innerContainer}>
          <h1 className={page.title}>FITNESS DAILY</h1>
          <h2 className={page.tagline}>Creating fitness success stories</h2>

          <p className={page.content}>
            If you want to gain muscle and live a healther life, you&apos;ve
            come to the right place. You will learn how to maintain a consistent
            schedule for a healthier you, by eating foods rich in nutrients,
            along with exercising to build muscle and burn those unwanted
            calories. You will discover insightful and helpful tips whether you
            are a novice or an expert. Join us as we walk you through the
            process of achieving your fitness objectives and enhancing your
            mental and physical temple.
          </p>
        </div>
      </section>
    </main>
  );
}
