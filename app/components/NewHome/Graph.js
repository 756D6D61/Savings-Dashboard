import React, { Component } from 'react'
import styled from 'styled-components'
import { VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryStack } from 'victory'

const Content = styled.div`
    height: 75.5vh;
    width: 35vw;
    background:#A5A5A5;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
    margin-top: 15px;
    margin-left:-10px;
`

const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
  ];
  
  const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
  ];
  
  const data2015 = [
    {quarter: 1, earnings: 18000},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 15000},
    {quarter: 4, earnings: 12000}
  ];  

  const cornerRadius = 10;
  class CustomBar extends React.Component {
    render() {
      const y0 = this.props.y0 + cornerRadius;
      const z0 = this.props.z0 - cornerRadius;
      return <Bar {...this.props} y0={y0} z0={z0} />;
    }
  }

class Graph extends Component{
    render(){
        return(
            <Content>
                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                   
                    <VictoryStack
                    colorScale={["#5202FA", "#8A55F9", "#B392F9", "#D6C6F8"]}
                    >
                    <VictoryBar
                        data={data2012}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryBar
                        data={data2013}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryBar
                        data={data2014}
                        x="quarter"
                        y="earnings"
                    />
                    <VictoryBar
                        data={data2015}
                        x="quarter"
                        y="earnings"
                        cornerRadius={cornerRadius}
                    />
                    </VictoryStack>
                </VictoryChart>
            </Content>
        )
    }
}

export default Graph