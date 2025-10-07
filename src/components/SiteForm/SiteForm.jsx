import "./style.scss";
import SiteButton from "../SiteButton/SiteButton";
import InputLabel from "../InputLabel/InputLabel";
import { useEffect, useState } from "react";

export default function SiteForm({ form }) {
  const [formLabels, setFormLabels] = useState([]);

  //   console.log(form);

  const getLabels = () => {
    if (!form?.labels) return;
    form.labels.forEach((element) => {
      setFormLabels((formLabels) => [...formLabels, element]);
    });
  };

  useEffect(() => {
    getLabels();
  }, [form]);

  return (
    <form method="post">
      <h2>{form?.title}</h2>
      <div className="labels">
        {formLabels.map((label, index) =>
          label.type !== "submit" ? (
            <InputLabel
              key={index}
              id={label.id}
              type={label.type}
              placeholder={label.placeholder}
              className={label.className}
              autoComplete={label.autoComplete}
            />
          ) : (
            label.type === "submit" && (
              <SiteButton
                key={index}
                className={label.className}
                text={label.text}
              />
            )
          )
        )}
      </div>
    </form>
  );
}
