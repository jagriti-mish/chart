
import './index.css';

import { createChart,PriceScaleMode,isBusinessDay} from 'lightweight-charts';

var container = document.createElement('div');
document.body.appendChild(container);

var width = 1200;
var height = 600;

var chart = createChart(container, {
	width: width,
	height: height,
	rightPriceScale: {
		scaleMargins: {
			top: 0.2,
			bottom: 0.1,}
  //  mode: PriceScaleMode.Percentage,
            
		},
        title: 'themelia chart',

        priceScale: {
            mode: PriceScaleMode.Percentage,
        },
       
  
	layout: {
		backgroundColor: '#ffffff',
		textColor: 'rgba(33, 24, 9, 277)',
        lineColor:'rgb(255,0,0)'
        },

	grid: {
		vertLines: {
			visible: false,
		},
		horzLines: {
			visible: false,
		},
	}, 
	timeScale: {

       tickMarkFormatter: (time) => {
           const date = new Date(time*1000);  
        const month =   date.toDateString().substr(4, 3);
        console.log("month",month );
           //  console.log(date.toLocaleDateString("en-US"));
            // console.log(date.getTimezoneOffset());
            return month + ' ' + date.getHours() + ':' + date.getMinutes() ;
              // var utcSeconds = time;
      // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
     //  d.setUTCSeconds(utcSeconds);
     
       },
           visible: true,
           timeVisible: true,   
		
	},
});



var extraSeries = chart.addLineSeries({
    color: '#008000',

});
var lineSeries = chart.addLineSeries({
    color: '#f48fb1',
});


lineSeries.setData([    
	{
    time : 1637049600,
    Value: -7.084681174195396
},
{
    time: 1637096400,
    Value: -7.302224232092714
},
{
    time: 1637100000,
    Value: -6.856007010328701
}, 
{
    time: 1637103600,
    value: -6.721492485215852
},
{
    time: 1637064000,
    value: -7.196816777318316
},
{
    time: 1637110800,
    value: -6.6170337095850185
},
{
    time: 1637114400,
    value: -5.151408934268331
},
{
    time: 1637118000,
    value: -3.700724519580212
},
{
    time: 1637121600,
    value: -0.3765840510161156
},
{
    time: 1637128800,
    value: -0.2741133078374758
},
{
    time: 1637136000,
    value: -0.8391234148182769
},
{
    time: 1637139600,
    value: -0.23640625082251843
},
{
    time: 1637143200,
    value: 1.7341898045100113
},
{
    time: 1637146800,
    value: 2.071688849701925
},
{
    time: 1637150400,
    value: 3.7150724302126292
},
{
    time: 1637154000,
    value: 0.018163669656634518
},
{
    time: 1637157600,
    value: 0.6381507335359249
},
{
    time: 1637161200,
    value: 1.9159242876632288
},
{
    time: 1637164800,
    value: 3.6859503427141282
},
{
    time: 1637168400,
    value: 3.314818018294785
},
{
    time: 1637175600,
    value: 3.4768478684853
},
{
    time: 1637179200,
    value: 4.124825112941055
},

]);

extraSeries.setData([
    {
        time: 1637049600,
        value: -9.67595854482921
    },
    {
        time:1637096400 ,
        value: -9.707905948245521
    },
    {
        time: 1637100000,
        value: -9.39369243251954
    },
    {
        time: 1637103600,
        value: -8.676102440053402
    },
    {
        time: 1637064000,
        value: -9.193032401504396
    },
    {
        time: 1637110800,
        value: -7.906311644305264
    },
    {
        time:1637114400,
        value: -6.898303043876119
    },
    {
        time: 1637118000,
        value: -5.457774587636766
    },
    {
        time: 1637121600,
        value: -3.445645598729974
    },
    {
        time:1637128800 ,
        value: -3.5207432291041507
    },
    {
        time:1637136000,
        value: -3.475648862030001
    },
    {
        time: 1637139600,
        value: -3.1023400103437515
    },
    {
        time: 1637143200,
        value: -2.099180446028992
    },
    {
        time: 1637146800,
        value: -2.6186511399495793
    },
    {
        time: 1637150400,
        value: -2.37839536328065
    },
    {
        time: 1637157600,
        value: -2.1769872651458244
    },
    {
        time: 1637161200,
        value: -1.5767220994312159
    },
    {
        time: 1637164800,
        value: -1.2937325558185275
    },
    {
        time: 1637168400,
        value: -0.731221000759319
    },
    {
        time:1637175600 ,
        value: -0.5468266584564119
    },
    {
        time: 1637179200,
        value: -0.2647125944742923
    },
    {
        time: 1637179200,
        value: 0.5579224513919678
    }
    
]);

function businessDayToString(businessDay) {
	return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
}

var toolTipWidth = 100;
var toolTipHeight = 80;
var toolTipMargin = 15;

var toolTip = document.createElement('div');
toolTip.className = 'floating-tooltip-2';
container.appendChild(toolTip);

// update tooltip
chart.subscribeCrosshairMove(function(param) {
	if (!param.time || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
		toolTip.style.display = 'none';
		return;
	}

    var dateStr = isBusinessDay(param.time)
    ? businessDayToString(param.time)
    : new Date(param.time * 1000).toLocaleDateString();

	toolTip.style.display = 'block';
	var value = param.seriesPrices.get(lineSeries);
	toolTip.innerHTML = '<div style="color: rgba(255, 70, 70, 1)"> Adjustment </div>' +
		'<div style="font-size: 24px; margin: 4px 0px">' + Math.round(value * 100) / 100 + '</div>' +
		'<div>' + dateStr + '</div>';

	var y = param.point.y;
    console.log("value",value);
	var left = param.point.x + toolTipMargin;
	if (left > width - toolTipWidth) {
		left = param.point.x - toolTipMargin - toolTipWidth;
	}

	var top = y + toolTipMargin;
	if (top > height - toolTipHeight) {
		top = y - toolTipHeight - toolTipMargin;
	}

	toolTip.style.left = left + 'px';
	toolTip.style.top = top + 'px';
});

function App() {
  return (
    <div className="App"> 
    </div>
  );
}
export default App;
