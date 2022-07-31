

const Week = () => {
    return ( 
        <>
            {/* <!-- Weeks Tab --> */}
            <div>
                <div id="tab1" className="tabs show">
                    <header>Weeks Tab</header>
                    <main>
                        <aside>
                            <div className="select-header">
                                Choose a Week
                            </div>
                            <div className="form-container">
                                    <div className="module">
                                        <form action="#">
                                            <select className="form-select" >
                                                {/* <!-- The Options should be DYNAMICALLY SET from the number of weeks the instructor inserted while filling the Create new class form --> */}
                                                <option >Choose a Week</option>
                                                <option value="week1">Week 1</option>
                                                <option value="week2">Week 2</option>
                                                <option value="week3">Week 3</option>
                                                <option value="week4">Week 4</option>
                                                <option value="week5">Week 5</option>
                                                <option value="week6">Week 6</option>
                                                <option value="week7">Week 7</option>
                                                <option value="week8">Week 8</option>
                                                <option value="week9">Week 9</option>
                                                <option value="week10">Week 10</option>
                                                <option value="week11">Week 11</option>
                                                <option value="week12">Week 12</option>
                                            </select>
                                        </form>
                                    </div>
                            </div>
                        </aside>
                        <section>Days
                            <div className="day">
                                <div className="day-header">
                                    Monday
                                </div>
                                <div className="form-container">
                                    <form action="">
                                        <div className="module">
                                            <input type="text" className="form-control" placeholder="Module" />
                                        </div>
                                        <div className="submit">
                                            <input type="submit" className="btn btn-success" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="day">
                                <div className="day-header">
                                    Wednesday
                                </div>
                                <div className="form-container">
                                    <form action="">
                                        <div className="module">
                                            <input type="text" className="form-control" placeholder="Module" />
                                        </div>
                                        <div className="submit">
                                            <input type="submit" className="btn btn-success" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="day">
                                <div className="day-header">
                                    Friday
                                </div>
                                <div className="form-container">
                                    <form action="">
                                        <div className="module">
                                            <input type="text" className="form-control" placeholder="Module" />
                                        </div>
                                        <div className="submit">
                                            <input type="submit" className="btn btn-success" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
     );
}
 
export default Week;