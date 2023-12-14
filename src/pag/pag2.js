import './pag.css';
import OIG3 from '../img/OIG7.jpg'
import OIG2 from '../img/OIG6.png'
import './fonts.css'
import { TypingEffect } from '../GenLib';
import { ReactComponent as Icon } from './home.svg';
import { useHistory } from 'react-router-dom';

export function Test2(){
    const history = useHistory();
    function HFC(){
        history.push("/");
    }
    return(
        <div className='page'>
            <div className='title'>
                <TypingEffect text="Fisici Pluralisti" startDelay={0}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%'}}>
                <div style={{marginRight: '20px'}}>
                    <div className='fade-in-bottom' style={{marginLeft: '20px'}}>
                        <div className='myDiv4'>
                            <div className='top-halff'>
                                <div style={{width: 200, height: 410}}>
                                    <img
                                    src={OIG2}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px' }}
                                    alt=''/>
                                </div>
                            </div>
                            <div className='btm-ttl'>
                                Chi erano?
                            </div>
                            <div className='btm-txt'>
                                I fisici pluralisti erano un gruppo di filosofi <br/>
                                presocratici che credevano che la realtà fosse <br/>
                                costituita da più elementi anziché da uno solo. <br/>
                                I principali fisici pluralisti erano Empedocle, <br/>
                                Anassagora e Democrito. <br/>
                                Empedocle credeva che ci fossero quattro radici<br/>
                                o elementi primordiali: aria, fuoco, acqua e terra,<br/>
                                che si combinavano per formare tutte le cose.<br/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='fade-in-bottom'>
                        <div className='myDiv4'>
                            <div className='top-halff'>
                                <div style={{width: 200, height: 410}}>
                                    <img
                                    src={OIG3}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px' }}
                                    alt=''/>
                                </div>
                            </div>
                            <div className='btm-ttl'>
                                Democrito e la teoria degli atomi
                            </div>
                            <div className='btm-txt'>
                                Democrito è noto per aver sviluppato<br/>
                                la teoria degli atomi, sostenendo che tutto<br/>
                                è composto da piccole particelle indivisibili<br/>
                                chiamate "atomi". Questi filosofi erano chiamati<br/>
                                "pluralisti" perché credevano in molteplici<br/>
                                elementi costitutivi della realtà, contrapponendosi<br/>
                                ai filosofi "monisti" che credevano in un unico<br/>
                                principio fondamentale.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <button className='fab' onClick={HFC}>
                <Icon className='icon'/>
            </button>
        </div>
    );
}