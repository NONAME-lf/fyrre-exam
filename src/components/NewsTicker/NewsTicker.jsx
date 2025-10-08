import { useEffect } from "react";
import "./style.scss";

export default function NewsTicker(props) {
  const newsAdds = props?.newsTicker?.adds;
  const className = props?.className;

  // Function to move the ticker
  async function moveTicker() {
    if (!props?.newsTicker) return;
    const ticker = document.querySelector(`${className} .news-list`);
    const title = document.querySelector(`${className} .title`);

    let titleWidth = title.offsetWidth;
    let tickerWidth = ticker.offsetWidth;

    if (props?.newsTicker?.title && !props.newsTicker?.news) {
      fillTicker(ticker, tickerWidth, titleWidth, title);
      tickerWidth = ticker.offsetWidth;
    } else if (tickerWidth < ticker.parentElement.offsetWidth - titleWidth) {
      fillTicker(ticker, tickerWidth, titleWidth);
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

  // Function to fill the ticker with items if there's not enough
  const fillTicker = (ticker, tickerWidth, titleWidth, title = null) => {
    if (tickerWidth < ticker.parentElement.offsetWidth - titleWidth) {
      let i = 0;
      while (
        tickerWidth < ticker.parentElement.offsetWidth - titleWidth &&
        title &&
        i < 20
      ) {
        const li = document.createElement("li");
        li.innerHTML = title.outerHTML;
        ticker.appendChild(li);
        tickerWidth = ticker.offsetWidth;
        i++;
      }
      while (
        tickerWidth < ticker.parentElement.offsetWidth - titleWidth &&
        !title
      ) {
        if (i >= ticker.children.length) i = 0;
        const itemClone = ticker.children[i].cloneNode(true);
        ticker.appendChild(itemClone);
        i++;
      }
    }
  };

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
        {props.newsTicker?.news &&
          props.newsTicker?.news.map((item) => {
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
