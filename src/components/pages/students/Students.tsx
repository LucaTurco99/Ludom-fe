import { useEffect } from "react";
import SearchForm from "../../shared/SearchForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


const students = [
    { id: 1, first: "Alice", lastname: "Freshman", icon: "person", link: "alice-profile" },
    { id: 2, first: "Bob", lastname: "Sophomore", icon: "person", link: "bob-profile" },
    { id: 3, first: "Charlie", lastname: "Junior", icon: "person", link: "charlie-profile" },
    { id: 4, first: "Diana", lastname: "Senior", icon: "person", link: "diana-profile" },
    { id: 5, first: "Eve", lastname: "Freshman", icon: "person", link: "eve-profile" },
    { id: 6, first: "Frank", lastname: "Sophomore", icon: "person", link: "frank-profile" },
    { id: 7, first: "Grace", lastname: "Junior", icon: "person", link: "grace-profile" },
    { id: 8, first: "Hank", lastname: "Senior", icon: "person", link: "hank-profile" },
];

function Students() {

    const teachersForm = useSelector((state: RootState) => state.teachersForm.value);

    useEffect(() => {
        
        // teachers.forEach((teacher) => {
        //     if (teacher.first.toLowerCase() === (teachersForm.firstName.toLowerCase()) || teacher.lastname.toLowerCase() === (teachersForm.lastName.toLowerCase())) {
        //         console.log("Found:", teacher);
        //     }
        // });
    } , [teachersForm]);
    

    return (
        <>
            <div className="d-flex flex-column justify-content-start mt-4 mb-5">
                <h1>
                    <i className="bi bi-person-fill me-2"></i> Students Section
                </h1>
                <span className="fs-6">
                    Here you can find all students' resources and information. Explore the features and functionalities available.
                </span>
            </div>

            <SearchForm />

            <table className="table table-striped table-hover shadow-lg align-middle">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.first}</td>
                            <td>{student.lastname}</td>
                            <td>@{student.link}</td>
                            <td><button className="btn btn-primary">View Profile</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Students;