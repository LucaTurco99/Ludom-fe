import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <span className="">
            <button className="btn btn-secondary" onClick={handleBack}>
                <i className="bi bi-arrow-left "></i>
            </button>
        </span>
    );
}

export default BackButton;