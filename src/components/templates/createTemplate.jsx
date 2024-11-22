import { FaArrowLeft } from "react-icons/fa";
import styles from "./createTemplate.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CreateTemplate = () => {
  const form = useForm();
  const watchType = form.watch("type");
  const navigate = useNavigate();

  useEffect(() => {
    form.setValue("type", 1);
  }, []);

  const configQuill = () => {
    const modules = {
      toolbar: [
        [{ font: [] }, { size: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "super" }, { script: "sub" }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
      ],
    };

    const formats = [
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "color",
      "background",
      "script",
      "super",
      "sub",
      "header",
      "blockquote",
      "code-block",
      "list",
      "bullet",
      "indent",
      "direction",
      "align",
      "link",
      "image",
      "video",
      "clean",
    ];

    return { modules, formats };
  };
  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerBack}>
          <FaArrowLeft
            onClick={() => {
              navigate("/template");
            }}
           />
        </div>
        <form onSubmit={form.handleSubmit((data) => handleForm(data))}>
          <div className={styles.containerHeader}>
            <div className={styles.containerInput}>
              <label htmlFor="name">Guardar plantilla como:</label>
              <input
                {...form.register("name", { required: true })}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className={styles.containerInput}>
              <label htmlFor="type">Tipo</label>
              <select
                {...form.register("type", { required: true })}
                name="type"
                id="type"
              >
                <option value="1">Correo electrónico</option>
                <option value="2">SMS</option>
              </select>
            </div>
          </div>
          {watchType == 1 ? (
            <ReactQuill
              formats={configQuill().formats}
              modules={configQuill().modules}
              className={styles.containerText}
              placeholder="Contenido mensaje de correo"
              onChange={(value) => form.setValue("content", value)}
            />
          ) : (
            <div className={styles.containerInput}>
              <label htmlFor="content">Contenido mensaje SMS</label>
              <textarea
                {...form.register("message", { required: true })}
                name="content"
                id="content"
              />
            </div>
          )}
          <div className={styles.containerButton}>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </>
  );
};
