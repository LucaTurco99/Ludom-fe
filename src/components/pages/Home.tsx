import Card from "../shared/Card";

function Home() {
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center mt-5 mb-5 shadow-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <img src="https://media.istockphoto.com/id/1206837259/vector/school-building-exterior-graphic-black-white-sketch-illustration-vector.jpg?s=612x612&w=0&k=20&c=4IS_ZmHskJF99nGHdjyy_cpeZGcfBpRawFHlQoe5VBM="
                                alt="image school"
                                className="rounded-5 img-fluid" ></img>
                        </div>
                        <div className="col-7 p-5 text-center d-flex justify-content-center align-items-center d-flex flex-column">
                            <h1>Welcome to Ludom Dashboard</h1>
                            <span className="fs-6">This dashboard is used to manage the school system. Explore the features and functionalities available</span>
                        </div>
                    </div>

                </div>


            </div>

            <div className="d-flex flex-wrap justify-content-start mt-4 mb-5 gap-4">
                <Card link="teachers" icon="people" title="Teachers" description="Here where you can find all teachers availabilities"></Card>
                <Card link="students" icon="person" title="Students" description="Here where you can find all students statistics"></Card>
                <Card link="classroom" icon="building" title="ClassRoom" description="Here where you can find classroom with all necessary resources"></Card>
                <Card link="support" icon="life-preserver" title="Support" description="Here where you can find all support resources"></Card>
            </div>

        </>


    );
}

export default Home;