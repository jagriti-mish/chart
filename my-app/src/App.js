import "./App.css";
import Chart from "react-google-charts";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={[
          [
            "Day",
            "Guardians of the Galaxy",
            "The Avengers",
            "Transformers: Age of Extinction"
          ],
          [1, 37.8, 80.8, 41.8],
          [2, 30.9, 69.5, 32.4],
          [3, 25.4, 57, 25.7],
          [4, 11.7, 18.8, 10.5],
          [5, 11.9, 17.6, 10.4],
          [6, 8.8, 13.6, 7.7],
          [7, 7.6, 12.3, 9.6],
          [8, 12.3, 29.2, 10.6],
          [9, 16.9, 42.9, 14.8],
          [10, 12.8, 30.9, 11.6]
        ]}
        options={{
          chart: {
            title: "Box Office Earnings in First Two Weeks of Opening",
            subtitle: "in millions of dollars (USD)",
            hAxis: {
              gridlines: {
                count: 0
              }
            },
            crosshair: {
              trigger: "both",
              orientation: "vertical"
            },
            focusTarget: "category"
          }
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}
