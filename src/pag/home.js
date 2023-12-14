import React, { useEffect, useState } from 'react';
import {TypingEffect} from "../GenLib";
import '../App.css';
import OIP from '../img/OIP.png';
import OIG from '../img/OIG.png'
import OIG2 from '../img/OIG2.png'
import { useHistory } from 'react-router-dom';

export function Home() {
    const [showDiv, setShowDiv] = useState(false);
    const history = useHistory();
    const FadeIn = ({delay, children}) => {
        useEffect(() =>{
            const timeout = setTimeout(() => {
                setShowDiv(true);
            }, [delay]);
            return () => clearTimeout(timeout);
        }, [delay]);
    
        return (
            <div 
                className={showDiv ? 'fade-in' : 'hidden'} 
                style={{
                    opacity: showDiv ? 1 : 0,
                    transform: showDiv ? 'translateY(-20px)' : 'translateY(0)', // Adjust the Y value as needed
                    transition: 'opacity 0.5s, transform 0.5s'
                }}
            >
                {children}
            </div>
        );
    };
    function handleClickS(){
        history.push("/Socrate");
    }
    function handleClickF(){
        history.push("/Fisici-Pluralisti");
    }
    function handleClickS2(){
        history.push("/Sofisti");
    }
    return (
        <div className="App">
            <header className="App-header">
            <TypingEffect text="Filosofia sul web." startDelay={0}/>
                <FadeIn delay={2850}>
                    <div className='myDiv'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                            <div className='myDiv2 container' style={{marginRight: '20px'}} onClick={handleClickS}>
                                <div className='top-half'>
                                    <img src={OIP} className='cover-image'
                                    alt=''/>
                                </div>
                                <div className='text-below'>Socrate</div>
                            </div>
                            <div className='myDiv2 container' style={{marginRight: '20px'}} onClick={handleClickF}>
                                <div className='top-half'>
                                    <img src={OIG} className='cover-image'
                                    alt=''/>
                                </div>
                                <div className='text-below'>Fisici Pluralisti</div>
                            </div>
                            <div className='myDiv2 container' onClick={handleClickS2}>
                                <div className='top-half'>
                                    <img src={OIG2} className='cover-image'
                                    alt=''/>
                                </div>
                                <div className='text-below'>Sofisti</div>
                            </div>

                        </div>
                    </div>
                </FadeIn>
            </header>
        </div>
    );
}