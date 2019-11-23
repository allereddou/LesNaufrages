import React from 'react';
import sad_pepe from "../../../images/sad_pepe.jpg"

export class DefeatProvider extends React.Component {
    render() {
        return (
            <div>
                <h1>Defeat !!!!</h1>
                <div>You have been defeated, you made pepe sad :'(</div>
                <img src={sad_pepe} width="400px" />
            </div>
        );
    }
}
