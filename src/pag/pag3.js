import './pag.css';
import '../App.css'
import OIG8 from '../img/OIG8.jpg'
import './fonts.css'
import { TypingEffect } from '../GenLib';
import { ReactComponent as Icon } from './home.svg';
import { useHistory } from 'react-router-dom';

export function Test3(){
    const history = useHistory();
    function HFC(){
        history.push("/");
    }
    return(
        <div className='page'>
            <div className='title'>
                <TypingEffect text="Sofisti" startDelay={0}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%'}}>

                <div>
                    <div className='fade-in-bottom' style={{marginLeft: '25%'}}>
                        <div className='myDiv5'>
                            <div className='top-halfff'>
                                <div className='cover-image'>
                                    <img
                                    src={OIG8}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px'}}
                                    alt=''/>
                                </div>
                            </div>
                            <div className='btm-ttl2'>
                                Chi erano?
                            </div>
                            <div className='btm-txt2'>
                                I sofisti erano maestri di retorica e filosofia nella Grecia antica, noti per insegnare l'arte dell'eloquenza e della persuasione in cambio di un compenso. Erano famosi per il loro relativismo etico e la capacità di argomentare su qualsiasi posizione, mettendo in discussione le concezioni tradizionali di verità e virtù. La loro figura spesso controversa fu determinante nell'evoluzione del pensiero critico e nel dibattito intellettuale del loro tempo. I sofisti si divisero in due generazioni: la sofistica antica, con esponenti come Protagora e Gorgia, il cui obiettivo era la formazione del cittadino per partecipare attivamente alla vita politica, e la nuova sofistica, caratterizzata dall'affermazione dell'individuo e dei suoi interessi personali anche contro la polis. I sofisti contribuirono a spostare l'attenzione dalla natura all'uomo, criticando i miti e le credenze del loro tempo e promuovendo l'importanza della formazione globale dell'individuo all'interno della società
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