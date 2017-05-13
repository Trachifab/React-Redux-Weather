import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}

function toCelcius(data) {
    return _.add(data - 273);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={ props.data }>
                <SparklinesLine color={ props.color } />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>
            { 
                (props.units === '°C') 
                ? <div>{ toCelcius(average(props.data)) } { props.units }</div> 
                : <div>{ average(props.data) } { props.units }</div>
            }
            </div>
        </div>

    );
}