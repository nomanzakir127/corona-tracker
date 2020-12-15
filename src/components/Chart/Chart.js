import React, {useEffect, useContext} from 'react'
import { MyContext } from '../../Context/ContextProvicer'
import {Line, Bar} from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';

const Chart = () =>{

    const {getDailyData, dailyData, state:{confirmed, recovered, deaths}, country} = useContext(MyContext)

    useEffect(() => {
        const fetchApi = async () =>{
          await getDailyData()
        }
        fetchApi()
    }, [])
    console.log(confirmed)
    const lineChart = (
        dailyData && dailyData.length ?
        (
            <Line data = {{
               labels : dailyData.map((item)=>item.reportDate),
               datasets : [{
                   data: dailyData.map((item)=>item.confirmed.total),
                   label: 'Infected',
                   borderColor: '#3299CC',
                   fill: true
               }, {
                data: dailyData.map((item)=>item.deaths.total),
                label: 'Deaths',
                borderColor: '#800000',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
            }}/> 
        ): null
        
    )
    const barChart = (
        confirmed ? (
        <Bar 
          data = {{
               labels: ['Confirmed', 'Recovered', 'Deaths'],
               datasets : [{
                data: [confirmed.value, recovered.value, deaths.value],
                label: 'Peope',
                backgroundColor:['#3299CC', '#228B22', '#800000']
            }]
            }
          }
          options={{
              legend:{display: false},
              title: {display: true, text: `Current Country is ${country}`}
          }}
        />) : null
    )
    return (
        <Grid container>
          <Grid item md={2} lg={2}>
          </Grid>
          <Grid item xs={12} md={8} lg={8} sm={12}>
              {country ? barChart : lineChart}
          </Grid>
        </Grid>
    )
} 
export default Chart