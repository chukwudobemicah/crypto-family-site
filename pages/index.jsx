import Image from "next/image";
import styles from "./index.module.scss";
import MovingLines from "@/components/MovingLines";

const Home = () => {
  return (
    <mai>
      <nav className="flex flex-row justify-between ">
        <Image
          src="/crypto-family-images/logo.svg"
          width={158}
          height={29}
          alt="logo"
        />
        <div className="flex flex-row justify-between gap-[1rem]">
          <Image
            src="/crypto-family-images/searchicon.svg"
            width={22}
            height={22}
            alt="searchicon"
          />
          <Image
            src="/crypto-family-images/shoppingcart.svg"
            height={31}
            width={31}
            alt="shopping cart"
          />
          <Image
            src="/crypto-family-images/hamburgermenu.svg"
            height={31}
            width={31}
            alt="hamburgermenu"
          />
        </div>
      </nav>

      <section className={styles["hero-container"]}>
        <MovingLines />
        <ul className="flex flex-col gap-[1rem]">
          {/* would have been links if it wasn't a dummy page (<a href="" target="_blank"></a>) */}
          <li>TWITTER</li>
          <li>INSTAGRAM</li>
          <li>,DISCORD</li>
        </ul>
        <div
          className={`${styles["hero-container__grid-2"]} flex flex-col gap-[1rem] items-center justify-center`}
        >
          <p className="flex flex-col justify-center items-center">
            <Image
              src="/crypto-family-images/sound-btn.svg"
              width={58}
              height={58}
              alt="sound btn"
            />
          </p>
          <p>CLICK TO FEEL THE BASS</p>
        </div>
        <Image
          className={styles["hero-container--hero"]}
          src="/crypto-family-images/hero.svg"
          height={451.19839801590064}
          width={347.37592773760343}
          alt="hero"
          priority
        />
        <div className={`${styles["hero-container__pattern"]}`}>
          <Image
            src="/crypto-family-images/pattern.svg"
            width={1774}
            height={449}
            priority
            alt="hero"
          />
        </div>
      </section>
      {/* https://rauno.me/craft/fractional-slider */}
    </mai>
  );
};

export default Home;
