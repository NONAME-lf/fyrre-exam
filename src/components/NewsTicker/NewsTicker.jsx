import { useEffect } from "react";
import "./style.scss";

export default function NewsTicker(props) {
  const newsAdds = props?.newsTicker?.adds;
  // console.log(props);
  const ticker = document.querySelector(".news-list");
  console.log([ticker]);

  function moveTicker() {
    if (!props?.newsTicker) return;
    const ticker = document.querySelector(".news-list");
    const title = document.querySelector(".title");
    const titleWidth = title.offsetWidth;
    const tickerWidth = ticker.offsetWidth;

    if (tickerWidth < ticker.parentElement.offsetWidth - titleWidth) {
      let i = 0;
      while (tickerWidth < ticker.parentElement.offsetWidth - titleWidth) {
        const itemClone = ticker.children[i].cloneNode(true);
        ticker.appendChild(itemClone);
        i++;
      }
    }

    const widthDiff = ticker.parentElement.offsetWidth - tickerWidth;
    const sign = Math.sign(widthDiff);

    const tickerClone = ticker.cloneNode(true);
    tickerClone.classList.add("clone");
    ticker.parentElement.appendChild(tickerClone);

    let pos = ticker.parentElement.offsetWidth;
    let clonePos = pos + tickerWidth + 24;

    ticker.style.transform = `translateX(${pos}px)`;
    tickerClone.style.transform = `translateX(${clonePos}px)`;
    let cycle = true;

    const step = () => {
      clonePos -= 2;
      pos -= 2;
      if (
        clonePos <=
          Math.abs(tickerWidth - ticker.parentElement.offsetWidth) * sign -
            24 &&
        cycle
      ) {
        pos = ticker.parentElement.offsetWidth;
        cycle = false;
      }
      if (
        pos <=
          Math.abs(tickerWidth - ticker.parentElement.offsetWidth) * sign -
            24 &&
        !cycle
      ) {
        clonePos = ticker.parentElement.offsetWidth;
        cycle = true;
      }
      ticker.style.transform = `translateX(${pos}px)`;
      tickerClone.style.transform = `translateX(${clonePos}px)`;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => cancelAnimationFrame(step);
  }

  useEffect(() => {
    moveTicker();
  }, [props]);

  return (
    <div className="news-ticker">
      {props.newsTicker?.title && (
        <h4 className="title">
          {props.newsTicker?.title}
          {newsAdds && <span className="newsAdds">{newsAdds}</span>}
        </h4>
      )}
      <ul className="news-list">
        {props.newsTicker?.news.map((item) => {
          return (
            <li key={item.id}>
              <span className="newsTitle">{item.text}</span>{" "}
              {newsAdds && <span className="newsAdds">{newsAdds}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
