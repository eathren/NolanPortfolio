import React, { Component } from 'react'
import Particles from 'react-particles-js' ;
export class index extends Component {
    render() {
        return (
            <div style={{position:'absolute', width:'100%', height:'100%'}}>
                <Particles 
                params={{
                    
                    particles: {
                        number: {
                          value: 43,
                          density: {
                            enable: true,
                            value_area: 1120.87876895486
                          }
                        },
                        color: {
                          value: "#0d193b"
                        },
                        shape: {
                          type: "circle",
                          stroke: {
                            width: 0,
                            color: "#bbbbbb"
                          },
                          polygon: {
                            nb_sides: 12
                          },
                       
                        },
                        opacity: {
                          value: 0.47237033834526254,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 0.567624330000568,
                            opacity_min: 0.210831894000211,
                            sync: false
                          }
                        },
                        size: {
                          value: 32.025107684424576,
                          random: true,
                          anim: {
                            enable: true,
                            speed: 10,
                            size_min: 40,
                            sync: false
                          }
                        },
                        line_linked: {
                          enable: true,
                          distance: 96.07532305327373,
                          color: "#0d193b",
                          opacity: 0.05,
                          width: 2.2417575379097205
                        },
                        move: {
                          enable: true,
                          speed: 1.15,
                          direction: "top",
                          random: true,
                          straight: false,
                          out_mode: "out",
                          bounce: false,
                          attract: {
                            enable: false,
                            rotateX: 800.6276921106144,
                            rotateY: 1601.2553842212287
                          }
                        }
                      },
                      interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: false,
                            mode: "repulse"
                          },
                          onclick: {
                            enable: false,
                            mode: "push"
                          },
                          resize: true
                        },
                        modes: {
                          grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4
                          },
                          push: {
                            particles_nb: 4
                          },
                          remove: {
                            particles_nb: 2
                          }
                        }
                      },
                      retina_detect: false
                     
                }} />
            </div>
        )
    }
}

export default index
