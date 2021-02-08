import React, { Component } from 'react';
import axios from 'axios'
import './Inicio.css'

const MOEDAS = "https://economia.awesomeapi.com.br/json/"

const api = axios.create({
    baseURL: MOEDAS
},
)

class Inicio extends Component {

    constructor() {
        super()
        this.state = {
            moeda: [],
            selectMoeda: "USD-BRL"

        }

        this.onChange = (e) => {
            const state = Object.assign({}, this.state)
            const campo = e.target.name
            state[campo] = e.target.value
            this.setState(state)
        }
        this.onSubmit = (e) => {
            e.preventDefault();
            this.componentDidMount()
        }

    }
    async componentDidMount() {
        const moedaAtual = await api.get(this.state.selectMoeda)

        this.setState({
            moeda: moedaAtual.data[0],
        })
    }






    render() {

        const moeda = this.state.moeda

        return (
            <div className="Inicio" >
                <h1>Cotação de moedas</h1>
                <div className="Container">
                    <div className="Coluna-1">
                        <label htmlFor="selectMoeda">Selecione uma moeda</label>
                        <select name="selectMoeda" id="selectMoeda" onChange={this.onChange} onClick={this.onSubmit}>
                            <option value="USD-BRL">Dólar Comercial</option>
                            <option value="USDT-BRL">Dólar Turismo</option>
                            <option value="CAD-BRL">Dólar Canadense</option>
                            <option value="AUD-BRL">Dólar Australiano</option>
                            <option value="EUR-BRL">Euro</option>
                            <option value="GBP-BRL">Libra Esterlina</option>
                            <option value="ARS-BRL">Peso Argentino</option>
                            <option value="JPY-BRL">Iene Japonês</option>
                            <option value="CHF-BRL">Franco Suíço</option>
                            <option value="CNY-BRL">Yuan Chinês</option>
                            <option value="YLS-BRL">Novo Shekel Israelense</option>
                            <option value="BTC-BRL">Bitcoin</option>
                            <option value="LTC-BRL">Litecoin</option>
                            <option value="ETH-BRL">Ethereum</option>
                            <option value="XRP-BRL">Ripple</option>
                        </select>
                    </div>

                    <div className="Coluna-2">
                        <ul>
                            <li>
                                <p>Nome: {moeda.name}</p>
                            </li>
                            <li>
                                <p>Código: {moeda.code}</p>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <p>Compra: {moeda.bid}</p>
                            </li>
                            <li>
                                <p>Venda: {moeda.ask}</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Variação: {moeda.varBid}</p>
                            </li>
                            <li>
                                <p>Alta: {moeda.high}</p>
                            </li>
                            <li>
                                <p>Baixa: {moeda.low}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }

}

export default Inicio