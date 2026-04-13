type TOfferInsideProps = {
  goods: string[];
}

export const OfferInside = ({goods}: TOfferInsideProps):JSX.Element => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {goods.map((item:string) => (
        <li className="offer__inside-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);
