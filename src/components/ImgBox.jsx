import ph1 from "../img/1.png";
import ph2 from "../img/2.png";
import ph3 from "../img/3.png";
import ph4 from "../img/4.png";
import ph5 from "../img/5.png";
import ph6 from "../img/6.png";
import ph7 from "../img/7.png";
import ph8 from "../img/8.png";
import ph9 from "../img/9.png";
import ph10 from "../img/10.png";

function ImgBox({ errorCounter }) {
    console.log(errorCounter);
    switch (errorCounter) {
        case 1: {
            return (
                <div className="img-box">
                    <img src={ph1} alt="hungmain-img"></img>
                </div>
            );
        }
        case 2: {
            return (
                <div className="img-box">
                    <img src={ph2} alt="hungmain-img"></img>
                </div>
            );
        }
        case 3: {
            return (
                <div className="img-box">
                    <img src={ph3} alt="hungmain-img"></img>
                </div>
            );
        }
        case 4: {
            return (
                <div className="img-box">
                    <img src={ph4} alt="hungmain-img"></img>
                </div>
            );
        }
        case 5: {
            return (
                <div className="img-box">
                    <img src={ph5} alt="hungmain-img"></img>
                </div>
            );
        }
        case 6: {
            return (
                <div className="img-box">
                    <img src={ph6} alt="hungmain-img"></img>
                </div>
            );
        }
        case 7: {
            return (
                <div className="img-box">
                    <img src={ph7} alt="hungmain-img"></img>
                </div>
            );
        }
        case 8: {
            return (
                <div className="img-box">
                    <img src={ph8} alt="hungmain-img"></img>
                </div>
            );
        }
        case 9: {
            return (
                <div className="img-box">
                    <img src={ph9} alt="hungmain-img"></img>
                </div>
            );
        }
        case 10: {
            return (
                <div className="img-box">
                    <img src={ph10} alt="hungmain-img"></img>
                </div>
            );
        }
        default: {
            return <div className="img-box"></div>;
        }
    }
}

export default ImgBox;
