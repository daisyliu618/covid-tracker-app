import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { Typography} from "@material-ui/core";
import styles from "./App.module.css";
import { fetchData } from "./api";
import cornaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={cornaImage} alt="covid-19" style={{marginBottom:'30px'}} />
        <Typography gutterBottom variant="h4" component="h2">
        {country? country:'Global'}
      </Typography>
        <Cards className={styles.image} data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
