import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { STATUS_OPTION, RESPONSE_OPTION, DEFAULT_COLORS } from "../../constants";


Chart.register(ArcElement, Tooltip, Legend);

const AppStatusPie = (props) => {
  const rawData = props.data ? props.data.data : [];
  let totalApplications = 0;
  rawData.forEach((item) => {
    totalApplications += item["value"]
  })
  console.log(totalApplications)
  const pieData = {
    labels: rawData.map((item) => {
      return item["type"].toUpperCase();
    }),
    datasets: [
      {
        label: props.dataset === STATUS_OPTION ? 'Status' : (props.dataset === RESPONSE_OPTION ? 'Response' : ''),
        data: rawData.map((item) => {
          if (props.isPercent) {
            return (item["value"] / totalApplications) * 100
          }
          else {
            return item["value"];
          }
        }),
        backgroundColor: DEFAULT_COLORS.slice(0, rawData.length)
      }
    ]
  }

  const pieOptions = {
    color: 'black',
    layout: {
      padding: 10
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }

  return (
    <>
      <Doughnut data={pieData} options={pieOptions}/>
    </>
  );
}

export default AppStatusPie