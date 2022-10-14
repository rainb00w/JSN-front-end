// import { Formik, Field, Form } from 'formik';
// import { useDispatch } from 'react-redux';
// import * as Yup from 'yup';
import { useEffect, useState } from "react";

const Library = () => {
  const [files, setFiles] = useState();

//   useEffect(() => {
//     console.log(file);
//   }, [file]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log('FILES', files);
    let formData = new FormData();
    formData.append("images", files)
  };

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  return (
    <>
      <form onSubmit={formSubmit} encType="multipart/form-data">
        <input type="file" multiple onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Library;
