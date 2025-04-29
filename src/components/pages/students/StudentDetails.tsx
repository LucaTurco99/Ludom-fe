import { useStudentQuery } from "../../../hooks/useStudentsQuery";
import { useParams } from "react-router-dom";
import BackButton from "../../core/Backbutton";

export function StudentDetails() {
    const { id } = useParams<{ id: string }>();

    const { data: student } = id ? useStudentQuery(id) : { data: undefined };

    return (
        <>
            <div className="d-flex flex-column justify-content-start mt-4 mb-5">
                <h1>
                    <BackButton />
                    <i className="bi bi-person-fill me-2"></i> Students Details Section
                </h1>
                <span className="fs-6">
                </span>
            </div>

            {student?.id && <h3>Student ID: {student.id}</h3>}
            {student?.nome && <h3>Student Name: {student.nome}</h3>}
            {student?.cognome && <h3>Student Surname: {student.cognome}</h3>}
            <span>Student Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur dignissimos obcaecati eius ab repellendus perspiciatis similique ipsa repudiandae quia?</span>
        </>
    );
}
