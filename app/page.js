import page from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={page.container}>
        <div className={page.innerContainer}>
          <h1 className={page.title}>FITNESS DAILY</h1>
          <div className={page.subContainer}>
            <h2 className={page.tagline}>Creating fitness success stories</h2>
            <svg
              className={page.lsvg}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              color="red"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.25 6v1q-.211.451-.588.95c-.537.716-1.259 1.44-2.016 2.196l.708.708.015-.016c.652-.652 1.33-1.33 1.881-2.015V12h1.5V6h1.216a.25.25 0 0 0 .192-.41L8.192 3.23a.25.25 0 0 0-.384 0L5.842 5.59a.25.25 0 0 0 .192.41z" />
              <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z" />
            </svg>
          </div>
          <p className={page.content}>
            If you want to gain muscle and live a healthier life, you&apos;ve
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
