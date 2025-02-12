import Header from "../Header/header";
import {GiHotMeal} from 'react-icons/gi';

function AssoOne () {
return (
    <div className="AssoOne">
        <div className="Branche francaise de l'association">
            <h1>Presentation de la branche francaise de l'association</h1>
                <div className="action-item">
                    <GiHotMeal className="icon" />
                    <p>Dejeuners dansants</p>
                </div>
                <div className="action-item">
                    <GiHotMeal className="icon" />
                    <p>Collectes de vetements</p>
                </div>
                <div className="action-item">
                    <GiHotMeal className="icon" />
                    <p>Concerts de charite</p>
                </div>
        </div>
    </div>
)
}
export default AssoOne;