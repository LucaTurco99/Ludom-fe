import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { resetForm, saveForm, updateField } from "../../store/TeacherSlice";

function SearchForm() {

    const teachersForm = useSelector((state: RootState) => state.teachersForm.value);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateField({ name, value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(saveForm(teachersForm));
    };

    return (
        <div className="my-2">
            <form className="flex" onSubmit={handleSubmit}>
                <div className="input-group mb-3 w-50 gap-2">
                    <input
                        type="text"
                        className="form-control rounded"
                        placeholder="First Name"
                        aria-label="First Name"
                        name="firstName"
                        value={teachersForm.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Last Name"
                        aria-label="Last Name"
                        name="lastName"
                        value={teachersForm.lastName}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary text-white px-3 rounded"
                    >
                        Search
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary text-white px-3 rounded"
                        onClick={() => {dispatch(resetForm())}}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;