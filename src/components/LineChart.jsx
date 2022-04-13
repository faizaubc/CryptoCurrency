import React from 'react';
import {Line} from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd';
import { Line as ChartJS } from 'chart.js/auto'


const {Title} = Typography;

function LineChart({coinHistory, currentPrice, coinName}) {

    const coinPrice = [];
    const coinTimestamp= [];
    console.log('indicator');
    console.log(coinHistory);
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
      }

      coinPrice.reverse();
    
      for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
      }
      coinTimestamp.reverse();
    console.log(coinPrice);
    console.log(coinTimestamp);
    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
  return (
  <>
  <Row className="chart-header">
    <Title level = {2} className="chart-title">
        {coinName} Price Chart
    </Title>
    <Col className="price-container">
        <Title level={5} className="current-change">{coinHistory?.data?.change}%</Title>
        <Title level={5} className="current-change">Current {coinName} Price: ${currentPrice}</Title>
    </Col>
  </Row>
  <Line data={data} options={options} />

  </>
  )
}

export default LineChart
