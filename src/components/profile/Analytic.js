import React from "react";
import styled from "styled-components";
import Chart from "../Chart";
import { userData } from "../../utils/progress";
import { ArrowDownward } from "@mui/icons-material";
import MyPieChart from "../PieChart";
import Barchart from "../Barchart";
const Analytic = () => {
  return (
    <AnalyticWrapper>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Time spent</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">15h 43m</span>
            <span className="featuredMoneyRate">
              -11.4% <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last week</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Total courses</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">8</span>
          </div>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$221</span>
          </div>
        </div>
      </div>
      <Chart
        title="Time Spent Learning"
        data={userData}
        dataKey="Time In Minute"
        grid
        yAxisLabel="Time In Minutes"
      />
      <MyPieChart />
      <Barchart />
    </AnalyticWrapper>
  );
};

const AnalyticWrapper = styled.div`
  .featured {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .featuredItem {
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }

  .featuredTitle {
    font-size: 20px;
  }

  .featuredMoneyContainer {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }

  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }

  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }

  .featuredIcon.negative {
    color: red;
  }

  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`;
export default Analytic;
