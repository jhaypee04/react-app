

const ModulesRegistry = () => {
    return ( 
        <>
            <div>
                <div className="tabs">
                    <header>
                        Modules Tab
                    </header>
                    <main>
                        <div className="accordion_container">
                            <div className="day_and_module_header">Week 1</div>
                            <div className="accordion_hidden">
                                <div className="day_and_module_container">
                                    <aside>Monday</aside>
                                    <section>Module</section>
                                </div>
                                <div className="day_and_module_container">
                                    <aside>Wednesday</aside>
                                    <section>Module</section>
                                </div>
                                <div className="day_and_module_container">
                                    <aside>Friday</aside>
                                    <section>Module</section>
                                </div>
                            </div>
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
     );
}
 
export default ModulesRegistry;