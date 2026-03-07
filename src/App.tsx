export default function App() {
  return (
    <>
      <article className="calculator">
        <div className="buttons">
          <output>아웃풋</output>
          <button className="clear">C</button>
          <button className="operator">/</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="operator">*</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="operator">-</button>
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="operator">+</button>
          <button className="number">0</button>
          <button className="result">=</button>
        </div>
      </article>
    </>
  );
}
