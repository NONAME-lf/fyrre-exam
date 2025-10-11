import "./style.scss";
import SiteButton from "../FormButton/FormButton";
import InputLabel from "../InputLabel/InputLabel";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SiteForm({ form }) {
  const [formLabels, setFormLabels] = useState([]);

  const getLabels = () => {
    if (!form?.labels) return;
    form.labels.forEach((element) => {
      setFormLabels((formLabels) => [...formLabels, element]);
    });
  };

  const submitHandler = async (e) => {
    const formElem = e.target;
    const button = document.querySelector(`#${formElem.id} #submit-button`);
    let fakeTime = 1000;
    let isValid = true;
    e.preventDefault();
    button.setAttribute("disabled", "");

    const name = formElem.querySelector("#userName");
    const nameVal = name.value.trim();
    const email = formElem.querySelector("#userEmail");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailVal = email.value;
    if (nameVal.length < 2 || !isNaN(nameVal)) {
      name.parentElement.classList.add("invalid");
      isValid = false;
      fakeTime = 0;
    }
    if (!emailRegex.test(emailVal)) {
      email.parentElement.classList.add("invalid");
      isValid = false;
      fakeTime = 0;
    }

    if (!isValid) {
      document.querySelectorAll(".invalid").forEach((element) => {
        element.addEventListener("keydown", function () {
          element.classList.remove("invalid");
          isValid = true;
        });
      });
    }

    isValid &&
      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (isValid) {
              resolve();
            } else {
              reject();
            }
          }, fakeTime);
        }),
        {
          pending: "Processing...",
        },
        {
          theme: "dark",
        }
      );

    const msg = `<b>Name: </b>${nameVal}%0a<b>Email: </b>${emailVal}`;

    const resp = setTimeout(async function () {
      const resp = isValid
        ? await fetch(
            `https://api.telegram.org/bot${
              import.meta.env.VITE_BOT_TOKEN
            }/sendMessage?chat_id=${
              import.meta.env.VITE_CHAT_ID
            }&text=${msg}&parse_mode=html`
          )
        : "oops!";
      const answer = isValid ? await resp.json() : "oops indeed!";
      if (isValid && answer.ok) {
        formElem.reset();
        toast.success("You've successfully contacted us!", { theme: "dark" });
      } else {
        toast.error("Something went wrong!\n" + answer.description, {
          theme: "dark",
        });
      }
      button.removeAttribute("disabled");
    }, fakeTime);
  };

  useEffect(() => {
    getLabels();
  }, [form]);

  return (
    <form method="post" id={`site-${form?.id}-form`} onSubmit={submitHandler}>
      {form?.hgroup && (
        <hgroup>
          {form?.hgroup?.upper && <p>{form?.hgroup?.upper}</p>}
          <h2>{form?.hgroup?.title}</h2>
          {form?.hgroup?.lower && <p>{form?.hgroup?.lower}</p>}
        </hgroup>
      )}
      {!form?.hgroup && <h2>{form?.title}</h2>}
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
