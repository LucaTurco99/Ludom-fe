import SearchForm from "../../shared/SearchForm";
import BackButton from "../../core/Backbutton";

const teachers = [
    { id: 1, first: "Mark", description: "Math Teacher", icon: "person", link: "mark-profile" },
    { id: 2, first: "Jacob", description: "Science Teacher", icon: "person", link: "jacob-profile" },
    { id: 3, first: "John", description: "History Teacher", icon: "person", link: "john-profile" },
    { id: 4, first: "Jane", description: "English Teacher", icon: "person", link: "jane-profile" },
    { id: 5, first: "Mary", description: "Art Teacher", icon: "person", link: "mary-profile" },
    { id: 6, first: "Paul", description: "Physical Education Teacher", icon: "person", link: "paul-profile" },
    { id: 7, first: "Anna", description: "Music Teacher", icon: "person", link: "anna-profile" },
    { id: 8, first: "Tom", description: "Computer Science Teacher", icon: "person", link: "tom-profile" },
];

function Teachers() {

    return (
        <>
            <div className="d-flex flex-column justify-content-start mt-4 mb-5">

                <h1 className="d-flex align-items-center gap-2">
                    <BackButton />
                    <i className="bi bi-people-fill"></i>
                    <span>Teachers Section</span>
                </h1>
                <span className="fs-6">
                    Here you can find all teachers' availabilities and resources. Explore the features and functionalities available.
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
                    {teachers.map((teacher) => (
                        <tr key={teacher.id}>
                            <td>{teacher.first}</td>
                            <td>{teacher.description}</td>
                            <td>@{teacher.link}</td>
                            <td><button className="btn btn-primary">View Profile</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Teachers;