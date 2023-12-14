import './pag.css';
import OIG3 from '../img/OIG3.jpg'
import './fonts.css'
import { TypingEffect } from '../GenLib';
import { ReactComponent as Icon } from './home.svg';
import { useHistory } from 'react-router-dom';

export function Test(){
    const history = useHistory();
    function HFC(){
        history.push("/");
    }
    return(
        <div className='page'>
            <div className='title'>
                <TypingEffect text="Socrate" startDelay={0}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%'}}>
                <div style={{marginRight: '20px'}}>
                    <div className='fade-in-bottom' style={{marginLeft: '20px'}}>
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
                                Incredibilmente curioso
                            </div>
                            <div className='btm-txt'>
                                Socrate è uno dei filosofi più importanti della <br/>storia antica.<br/>
                                Nato ad Atene nel 470-469 a.C.,<br/>dedicò la sua vita alla ricerca<br/> filosofica della verità e alla costante<br/>indagine su se stesso e sugli altri esseri umani.
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
                                Un maestro della maieutica
                            </div>
                            <div className='btm-txt'>
                                Fu maestro della maieutica, un metodo che <br/>
                                consisteva nell'arte di far emergere la verità nei<br/>
                                suoi interlocutori attraverso il dialogo. <br/>
                                Socrate non scrisse nulla, e le informazioni sulla<br/>
                                sua vita e il suo pensiero ci sono pervenute<br/>
                                attraverso le opere di quattro grandi filosofi:<br/>
                                Aristofane, Senofonte, Platone e Aristotele.<br/>
                                Fu condannato a morte nel 399 a.C.<br/>
                                con l'accusa di empietà e corruzione dei giovani,<br/>
                                e la sua coerenza e dignità nell'accettare la<br/>
                                condanna lo resero un simbolo di integrità<br/>
                                intellettuale. <br/>
                                La sua morte fu considerata la prima esecuzione<br/>
                                di un intellettuale per il suo pensiero
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