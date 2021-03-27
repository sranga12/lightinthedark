import '../App.css';
import React from 'react';

class Light extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /*oxymoron --- -..- -.-- -- --- .-. --- -. */
        /*console.log(this.props.blink);*/
        if(this.props.blink) {
        return (
            <a-entity>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 3; dur: 3000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 3000; delay: 12000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:12000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 2; dur: 1000; delay: 15000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:15000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 3000; delay: 17000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:17000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 3000; delay: 23000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:23000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 1000; delay: 26000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:26000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 2; dur: 3000; delay: 27000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:27000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 2; dur: 3000; delay: 36000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:36000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 3; dur: 3000; delay: 45000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:45000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 1000; delay: 57000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:57000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 3000; delay: 58000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:58000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 3; dur: 3000; delay: 61000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:61000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 3000; delay: 77000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:77000">
                </a-circle>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06" visible="false"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07" animation="property: material.opacity; loop: 1; dur: 1000; delay: 80000"
                    animation__2="property: visible; from: false; to: true; dur: 1; delay:80000">
                </a-circle>
            </a-entity>
        );
        }
        else {
            return (
            <a-entity>
                <a-circle shader="flat" light="type: hemisphere; color: ##702A01" radius="0.06"
                    position="5.5 10 -8.5" rotation="90 0 0" color="#D91C07">
                </a-circle>
            </a-entity>
            );
        }
    }
}


export default Light;
