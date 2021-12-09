import { useState, useEffect } from 'react';
import * as d3 from 'd3';

export const CircleMask = () => { 
    let [radius, setRadius] = useState(2000);

    useEffect(() => {
        //Wait till the timing on the video is right...
        setTimeout(() => {
            //Decrease the radius in /// seconds
            const interval = setInterval(() => {
                //If radius is bellow ///, stop
                if(radius < 400) {
                    clearInterval(interval);
                } else {
                    radius = radius - 50;
                    setRadius(radius);
                }
            }, 100);
        }, 4000);
    }, []);

    //Creates circleMask component
    const createComponent = () => {
        return (
            <svg className={"circleMask"}>
                <defs>
                    <clipPath id="clip">
                        <circle cx="400" cy="400" r={radius} />
                    </clipPath>
                </defs>
            </svg>
        );
    };

    return createComponent();
}