import data from '../db/ModulesRegistryDb'
import Accordion from './Accordion'

const ModulesRegistry = () => {
    
    return ( 
        <>
            <div>
                <div id="tab2" className="tabs">
                    <header>
                        Modules Tab
                    </header>
                    <main>
                        { data.map((week) => {
                            const { no} = week
                            return (
                                    <Accordion  key={no} {...week} />
                                )
                            })}
                        
                    </main>
                </div>
            </div>
        </>
     );
}
 
export default ModulesRegistry;