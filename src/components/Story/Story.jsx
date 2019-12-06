import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import './Story.scss'
import Headroom from '../../react-headroom'
import Logo from '../Logo/Logo'

const mobileStyle = {
    position: 'relative',
    right: '25vw',
    top: '1rem',
    width: '100%'
}

export default class Story extends Component {
    render() {
        return (
            <div className="container">
                <Breakpoint tablet only>
                <Headroom style={{
                        paddingTop: "30px"
                    }}>
                    <Logo />
                </Headroom>
                    <div id="mobile-scroll">
                    <div>
                        <img style={{ width: "100%" }} src={require("../../assets/burgez-06.png")} alt="" />
                    </div>
                    <div className="text-tablet">
                        <h1>UNA STRANA STORIA</h1>
                        <p>Sono i giorni in cui, secondo i Maya, finirà il mondo.
                            Colui che 3 anni dopo sarebbe diventato l’ideatore e fondatore di BURGEZ, proprio in quei giorni è a New
                            York per cambiare lavoro e vita. Il suo lavoro a Milano non gli dà più soddisfazioni e pensa che negli
                            Stati Uniti possa ripartire da zero. Ha appuntamenti con diverse società: nove incontri nell’arco di soli
		                	tre giorni a Manhattan. Proprio quando il mondo vuole finire, lui vuole ricominciare.</p>
                        <p>È dicembre ed è freddissimo, non ha mai provato in vita sua un freddo tale.
                            Gli incontri di lavoro sono terminati e sembra che siano andati da Dio. È entrato in quegli uffici con la
		                	chimera del sogno americano e forse quel sogno non lo ha tradito.</p>
                        <p>È sera, esce per fare un giro tra Manhattan, il suo freddo e un paio di cocktail per festeggiare.
                            Cerca il locale più figo di Manhattan. Dieci metri prima del locale c’è un barbone seduto
                            vicino a uno sbuffo di aria calda. Si ferma un attimo di fronte a quel vecchietto steso a terra. Non capisce
                            come possa resistere a quel freddo, il barbone lo guarda sorridendo e dice: “Quello che provi è il freddo
                            che viene da dentro, non da fuori, è inutile che cerchi la felicità lontano dal tuo Paese perché non
                            potrai mai allontanarti da te stesso”. Sembra che il vecchietto abbia il dono di leggerlo dentro. ”Prendi
	                		questo”, dice.</p>
                        <p>Il vecchietto gli passa un piccolo vecchio diario composto da poche pagine. “Fanne qualcosa di buono nel tuo
                            Paese”. Gli spiega che il diario contiene un segreto di quelli che erano i suoi genitori tedeschi. “Come
                            vedi io non sono riuscito a farlo fruttare, ma tu sembri un ragazzo in gamba”, dice ridendo. Nel diario,
                            scritto in corsivo e con un inchiostro ormai quasi impercettibile, c’è la storia degli ultimi giorni dei
                            genitori del vecchietto ad Amburgo prima di imbarcarsi per il Nuovo Mondo e la ricetta di un fantomatico
                            panino con la carne, “fantomatico” perché le pagine che lo riguardano sono impreziosite con arzigogoli
                            disegnati a mano come se quella ricetta fosse la cosa più importante del diario. Si capisce che sono quelle
                            le pagine che giustificano l’esistenza di quel diario e il fatto che sia resistito negli anni e a tanti
                            freddi come quello di quella sera. Ha impiegato 10 secondi per decidere che non avrebbe dato seguito ai
                            colloqui, seppur
                            positivi, dei giorni precedenti. Forse il sogno americano dorme dentro a queste pagine
		                	da decenni.</p>
                        <p>A questo punto due cose lo mandano fuori di testa, il fatto che questo sogno può farlo
                            crescere in Italia e non in America, e che questo sogno esce dalle tasche di un povero emarginato dalla
                            società e non dalle tasche di qualche multinazionale. Un paradosso meraviglioso che gli scalda il cuore.
                            “Lo faccio!”, dice a se stesso. E come sapete, lo ha fatto!
                            Oggi qualcosa si è modificato, non esistono più alcuni degli ingredienti di cento anni fa e cento
                            anni fa non c’erano alcuni degli ingredienti che si usano oggi, ma lo spirito, l’amore e il 100% di
                            quella ricetta con i suoi trucchi e i suoi segreti stanno tutti dentro ad ogni singolo burger di BURGEZ.
		            	</p>
                    </div>
                    </div>
                </Breakpoint>
                <Breakpoint xlmobile down>
                <Headroom style={{
                        paddingTop: "30px"
                    }}>
                    <Logo />
                </Headroom>
                    <div>
                        <img style={mobileStyle} src={require("../../assets/burgez-06.png")} alt="" />
                    </div>
                    <div className="text">
                        <h1>UNA STRANA STORIA</h1>
                        <p>Sono i giorni in cui, secondo i Maya, finirà il mondo.
                            Colui che 3 anni dopo sarebbe diventato l’ideatore e fondatore di BURGEZ, proprio in quei giorni è a New
                            York per cambiare lavoro e vita. Il suo lavoro a Milano non gli dà più soddisfazioni e pensa che negli
                            Stati Uniti possa ripartire da zero. Ha appuntamenti con diverse società: nove incontri nell’arco di soli
		                	tre giorni a Manhattan. Proprio quando il mondo vuole finire, lui vuole ricominciare.</p>
                        <p>È dicembre ed è freddissimo, non ha mai provato in vita sua un freddo tale.
                            Gli incontri di lavoro sono terminati e sembra che siano andati da Dio. È entrato in quegli uffici con la
		                	chimera del sogno americano e forse quel sogno non lo ha tradito.</p>
                        <p>È sera, esce per fare un giro tra Manhattan, il suo freddo e un paio di cocktail per festeggiare.
                            Cerca il locale più figo di Manhattan. Dieci metri prima del locale c’è un barbone seduto
                            vicino a uno sbuffo di aria calda. Si ferma un attimo di fronte a quel vecchietto steso a terra. Non capisce
                            come possa resistere a quel freddo, il barbone lo guarda sorridendo e dice: “Quello che provi è il freddo
                            che viene da dentro, non da fuori, è inutile che cerchi la felicità lontano dal tuo Paese perché non
                            potrai mai allontanarti da te stesso”. Sembra che il vecchietto abbia il dono di leggerlo dentro. ”Prendi
	                		questo”, dice.</p>
                        <p>Il vecchietto gli passa un piccolo vecchio diario composto da poche pagine. “Fanne qualcosa di buono nel tuo
                            Paese”. Gli spiega che il diario contiene un segreto di quelli che erano i suoi genitori tedeschi. “Come
                            vedi io non sono riuscito a farlo fruttare, ma tu sembri un ragazzo in gamba”, dice ridendo. Nel diario,
                            scritto in corsivo e con un inchiostro ormai quasi impercettibile, c’è la storia degli ultimi giorni dei
                            genitori del vecchietto ad Amburgo prima di imbarcarsi per il Nuovo Mondo e la ricetta di un fantomatico
                            panino con la carne, “fantomatico” perché le pagine che lo riguardano sono impreziosite con arzigogoli
                            disegnati a mano come se quella ricetta fosse la cosa più importante del diario. Si capisce che sono quelle
                            le pagine che giustificano l’esistenza di quel diario e il fatto che sia resistito negli anni e a tanti
                            freddi come quello di quella sera. Ha impiegato 10 secondi per decidere che non avrebbe dato seguito ai
                            colloqui, seppur
                            positivi, dei giorni precedenti. Forse il sogno americano dorme dentro a queste pagine
		                	da decenni.</p>
                        <p>A questo punto due cose lo mandano fuori di testa, il fatto che questo sogno può farlo
                            crescere in Italia e non in America, e che questo sogno esce dalle tasche di un povero emarginato dalla
                            società e non dalle tasche di qualche multinazionale. Un paradosso meraviglioso che gli scalda il cuore.
                            “Lo faccio!”, dice a se stesso. E come sapete, lo ha fatto!
                            Oggi qualcosa si è modificato, non esistono più alcuni degli ingredienti di cento anni fa e cento
                            anni fa non c’erano alcuni degli ingredienti che si usano oggi, ma lo spirito, l’amore e il 100% di
                            quella ricetta con i suoi trucchi e i suoi segreti stanno tutti dentro ad ogni singolo burger di BURGEZ.
		            	</p>
                    </div>
                    <div className="botbar"></div>
                    {/* <div className="filler"></div> */}
                </Breakpoint>
                <Breakpoint desktop up>
                    <div>
                        <img style={{ width: "100%", maxHeight:"100%",objectFit:"cover", position:"fixed", zIndex:"-1" }} src={require("../../assets/burgez-06.png")} alt="" />
                    </div>
                    <div className="text-desktop">
                        <h1>UNA STRANA STORIA</h1>
                        <p>Sono i giorni in cui, secondo i Maya, finirà il mondo.
                            Colui che 3 anni dopo sarebbe diventato l’ideatore e fondatore di BURGEZ, proprio in quei giorni è a New
                            York per cambiare lavoro e vita. Il suo lavoro a Milano non gli dà più soddisfazioni e pensa che negli
                            Stati Uniti possa ripartire da zero. Ha appuntamenti con diverse società: nove incontri nell’arco di soli
		                	tre giorni a Manhattan. Proprio quando il mondo vuole finire, lui vuole ricominciare.</p>
                        <p>È dicembre ed è freddissimo, non ha mai provato in vita sua un freddo tale.
                            Gli incontri di lavoro sono terminati e sembra che siano andati da Dio. È entrato in quegli uffici con la
		                	chimera del sogno americano e forse quel sogno non lo ha tradito.</p>
                        <p>È sera, esce per fare un giro tra Manhattan, il suo freddo e un paio di cocktail per festeggiare.
                            Cerca il locale più figo di Manhattan. Dieci metri prima del locale c’è un barbone seduto
                            vicino a uno sbuffo di aria calda. Si ferma un attimo di fronte a quel vecchietto steso a terra. Non capisce
                            come possa resistere a quel freddo, il barbone lo guarda sorridendo e dice: “Quello che provi è il freddo
                            che viene da dentro, non da fuori, è inutile che cerchi la felicità lontano dal tuo Paese perché non
                            potrai mai allontanarti da te stesso”. Sembra che il vecchietto abbia il dono di leggerlo dentro. ”Prendi
	                		questo”, dice.</p>
                        <p>Il vecchietto gli passa un piccolo vecchio diario composto da poche pagine. “Fanne qualcosa di buono nel tuo
                            Paese”. Gli spiega che il diario contiene un segreto di quelli che erano i suoi genitori tedeschi. “Come
                            vedi io non sono riuscito a farlo fruttare, ma tu sembri un ragazzo in gamba”, dice ridendo. Nel diario,
                            scritto in corsivo e con un inchiostro ormai quasi impercettibile, c’è la storia degli ultimi giorni dei
                            genitori del vecchietto ad Amburgo prima di imbarcarsi per il Nuovo Mondo e la ricetta di un fantomatico
                            panino con la carne, “fantomatico” perché le pagine che lo riguardano sono impreziosite con arzigogoli
                            disegnati a mano come se quella ricetta fosse la cosa più importante del diario. Si capisce che sono quelle
                            le pagine che giustificano l’esistenza di quel diario e il fatto che sia resistito negli anni e a tanti
                            freddi come quello di quella sera. Ha impiegato 10 secondi per decidere che non avrebbe dato seguito ai
                            colloqui, seppur
                            positivi, dei giorni precedenti. Forse il sogno americano dorme dentro a queste pagine
		                	da decenni.</p>
                        <p>A questo punto due cose lo mandano fuori di testa, il fatto che questo sogno può farlo
                            crescere in Italia e non in America, e che questo sogno esce dalle tasche di un povero emarginato dalla
                            società e non dalle tasche di qualche multinazionale. Un paradosso meraviglioso che gli scalda il cuore.
                            “Lo faccio!”, dice a se stesso. E come sapete, lo ha fatto!
                            Oggi qualcosa si è modificato, non esistono più alcuni degli ingredienti di cento anni fa e cento
                            anni fa non c’erano alcuni degli ingredienti che si usano oggi, ma lo spirito, l’amore e il 100% di
                            quella ricetta con i suoi trucchi e i suoi segreti stanno tutti dentro ad ogni singolo burger di BURGEZ.
		            	</p>
                    </div>

                </Breakpoint>
            </div>
        )
    }
}
