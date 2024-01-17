import React from "react";
import page from "./page.module.css";

const about = () => {
  return (
    <div className={page.container}>
      <section className={page.innerContainer}>
        <h1 className={page.title}>FD</h1>
        <p className={page.paragraph}>
          About Fitness Daily
          <br /> <br /> Fitness Daily is a blog that helps you achieve your
          fitness goals and live a healthy lifestyle. Whether you want to
          increase your strength, boost your endurance, or burn calories, we
          have the tips, advice, and guidance you need. We also share delicious
          and nutritious recipes that will fuel your body and satisfy your taste
          buds. Fitness Daily is run by a team of certified personal trainers,
          nutritionists, and fitness enthusiasts who have years of experience
          and passion for what they do. They are here to motivate you, inspire
          you, and support you on your fitness journey. They will also keep you
          updated on the latest trends, research, and news in the fitness
          industry. Fitness Daily is more than just a blog. It is a community of
          like-minded people who share a common vision: to live a healthier and
          happier life. By joining Fitness Daily, you will gain access to
          exclusive content, offers, and events. You will also be able to
          interact with other members, ask questions, and share your progress.
          Fitness Daily is your ultimate source for everything fitness and
          nutrition. Why wait? Join us today and start your transformation!
        </p>
      </section>
    </div>
  );
};

export default about;
