

const Student = () => {
    return ( 
        <>
            <div>
                <div className="tabs">
                    <header>
                        Students Tab
                    </header>
                    <main>
                        <div className="accordion_container_student">
                            <div className="student_name">Mark Nwodo Augustine</div>

                            <div className="accordion_hidden_student">
                                <div className="student_other_details">
                                    <aside>Email(P.)</aside>
                                    <section>mark@google.com</section>
                                </div>
                                <div className="student_other_details">
                                    <aside>Email(S.)</aside>
                                    <section>parent@google.com</section>
                                </div>
                                <div className="student_other_details">
                                    <aside>Phone Number(P.)</aside>
                                    <section>07081232322</section>
                                </div>
                                <div className="student_other_details">
                                    <aside>Phone Number(S.)</aside>
                                    <section>07081232322</section>
                                </div>
                                <div className="student_other_details">
                                    <aside>Gender(S.)</aside>
                                    <section>Male</section>
                                </div>
                                <div className="student_other_details">
                                    <aside>Date Of Birth(S.)</aside>
                                    <section>01/08/2022</section>
                                </div>
                            </div>
                        </div>
                        
                    </main>
                </div>
            </div>
        </>
     );
}
 
export default Student;