import React from 'react';
import happy_pepe from "../../../images/happy_pepe.jpg";

export class VictoryProvider extends React.Component {
    render() {
        return (
            <div>
                <h1>Victory !!!!</h1>
                <div>Here is your pepe, you earned it !</div>
                <img src={happy_pepe} width="400px" />
            </div>
        );
    }
}
