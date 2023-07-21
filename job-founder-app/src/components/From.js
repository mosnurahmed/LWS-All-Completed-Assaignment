import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { changeJob, createJob } from "../features/job/jobSlice";
import { useNavigate, useParams } from "react-router-dom";

function From() {
  const jobs = useSelector((state) => state.jobs);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadLine] = useState("");
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { editId } = useParams();

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadLine("");
  };

  useEffect(() => {
    const { id, title, type, salary, deadline } = jobs.edit || {};

    if (id) {
      setEditMode(true);
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadLine(deadline);
    } else {
      setEditMode(false);
      reset();
    }
  }, [jobs]);

  const addHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      type,
      salary,
      deadline,
    };

    dispatch(createJob(data));
    reset();
    navigate("/");
  };

  const editHandler = (e) => {
    e.preventDefault();
    const editedData = {
      id: editId,
      data: { title, type, salary, deadline },
    };
    dispatch(changeJob(editedData));
    navigate("/")

  };

  return (


    
    <form className="space-y-6" onSubmit={editMode ? editHandler : addHandler}>
      <div className="fieldContainer">
        <label className="text-sm font-medium text-slate-300">Job Title</label>
        <select value={title} id="lws-JobTitle" name="lwsJobTitle" required onChange={(e) => setTitle(e.target.value)}>
          <option value="" selected>
            Select Job
          </option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="MERN Stack Developer">MERN Stack Developer</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Social Media Manager">Social Media Manager</option>
          <option value="Senior Executive">Senior Executive</option>
          <option value="Junior Executive">Junior Executive</option>
          <option value="Android App Develope">Android App Developer</option>
          <option value="Junior Executive">IOS App Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label>Job Type</label>
        <select value={type} id="lws-JobType" name="lwsJobType" onChange={(e) => setType(e.target.value)} required>
          <option value="" selected>
            Select Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label>Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            id="lws-JobSalary"
            name="lwsJobSalary"
            required
            value={salary}
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label>deadline</label>
        <input
          type="date"
          id="lws-JobDeadline"
          name="lwsJobDeadline"
          value={deadline}
          required
          onChange={(e) => setDeadLine(e.target.value)}
        />
      </div>

      <Button editMode={editMode} />
    </form>
  );
}

export default From;
