import { useState } from 'react';
const Prices = (props) => {
    const [Currency, setCurrency] = useState('USD');

    return (
        <div className="container">
            <h3>Bit coin rate for today, {props.data.time.updated}</h3>
            <div className="col-12 col-md-8">
                <div className="mt-4 mb-5">
                    <ul className="list-group">
                        <li className="list-group-item">Bitcoin rate for {props.bpi[Currency].description} <span className="badge badge-primary">{props.bpi[Currency].code}</span>
                            <strong>{props.bpi[Currency].rate}</strong>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 col-md-8">
                <select onChange={e => setCurrency(e.target.value)} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div className="col-12 col-md-8 mt-5">
                <h4>Note:</h4>
                <strong> {props.data.disclaimer}</strong>
            </div>
        </div>

    )

}
export default Prices;