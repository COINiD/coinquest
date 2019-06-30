import React, { PureComponent } from "react";
import { numFormat } from "../../utils/num-format";
export default class FiatValue extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isLoading: true
    };
  }

  componentDidMount() {
    let { reward, ticker } = this.props;
    this.fetchFromPriceApi(ticker, reward);
  }

  apiUrl = "https://min-api.cryptocompare.com/data";

  fetchFromPriceApi = (ticker, amount) => {
    const url = `${this.apiUrl}/` + "price" + `?fsym=${ticker}&tsyms=USD`;

    return fetch(url)
      .then(r => r.json())
      .then(j => {
        this.setState({
          value: amount * j["USD"],
          isLoading: false
        });
      });
  };

  render() {
    const { value, isLoading } = this.state;
    const { ticker, reward } = this.props;

    const renderLoader = () => {
      return "Fetching currency...";
    };

    const renderValue = () => {
      return `${reward} ${ticker} = ${numFormat(value)} USD`;
    };

    return (
      <p className="quest__fiat-value">
        {isLoading ? renderLoader() : renderValue()}
      </p>
    );
  }
}
