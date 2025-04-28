import { Outlet } from "react-router-dom";

function Content() {

  return (
    <div className="container p-4">
      <div >
        <Outlet />
      </div>
    </div>
  );
}

export default Content;