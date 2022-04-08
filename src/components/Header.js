import { moneyFormat } from "../Helpers";

function Header({ total, money }) {
  return (
    <>
    <div className="header1">merhaba</div>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcamak için <span>${moneyFormat(money - total)}</span> paranız kaldı!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak için <span>${moneyFormat(money)}</span> paranız var!
        </div>
      )}
      {money - total === 0 && (
        <div className="header">
          Harcamak için paran bitti!
        </div>
      )}
      <style jsx>{`
        .header1 {
          top:0;
          background: #eee;
          height: 6vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #eee;
          font-size:3vh;
          border: 1px solid #eee;
        }

        .header {
          opacity:0.9;
          position:fixed;
          top:0;
          background: linear-gradient(#30A6AA, #0069A2);
          width:-webkit-fill-available;
          height: 6vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size:3vh;
        }


        .header span{
            margin: 0 1vh;
            font-weight:bold;
            color: #FFFFFF;

        }
      `}</style>
    </>
  );
}

export default Header;
