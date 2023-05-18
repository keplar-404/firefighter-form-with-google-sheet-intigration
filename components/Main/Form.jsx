import { Button } from "flowbite-react";
import React from "react";
import { Element } from "react-scroll";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";

function Form() {
  const afffRef = useRef(null);
  const cancerRef = useRef(null);
  const _caseRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const zipCodeRef = useRef(null);
  const textRef = useRef(null);

  const [afffState, setAfffState] = useState(false);
  const [cancerState, setCancerState] = useState(false);
  const [caseState, setCaseState] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const afff = afffRef.current.value;
    if (afff === "--Select--") {
      setAfffState(true);
      return;
    } else {
      setAfffState(false);
    }

    const cancer = cancerRef.current.value;
    if (cancer === "--Select--") {
      setCancerState(true);
      return;
    } else {
      setCancerState(false);
    }

    const _case = _caseRef.current.value;
    if (_case === "--Select--") {
      setCaseState(true);
      return;
    } else {
      setCaseState(false);
    }

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const zip = zipCodeRef.current.value;
    const text = textRef.current.value;

    const _data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      ZipCode: zip,
      Afff: afff,
      Cancer: cancer,
      Case: _case,
      Text: text,
    };

    setSpin(true);

    axios
      .post(
        "https://sheet.best/api/sheets/bf08ea4d-8686-43b6-bde6-afbc32508a6a",
        _data
      )
      .then((res) => {
        toast("Your Submited successfully", {
          hideProgressBar: true,
          autoClose: 3000,
          type: "success",
        });
        setSpin(false);
        afffRef.current.value = "--Select--";
        cancerRef.current.value = "--Select--";
        _caseRef.current.value = "--Select--";
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        zipCodeRef.current.value = "";
        textRef.current.value = "";
      });

    // console.log(afff);
    // console.log(cancer);
    // console.log(_case);
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(phone);
    // console.log(zip);
  };

  const number = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  };
  const zip = (event) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    value = value.slice(0, 5); // Limit to 5 characters
    event.target.value = value;
  };
  return (
    <>
      <Element name="Form">
        <div className="mt-64 bg-black rounded-[5px] flex sm:flex-col xl:flex-row sm:gap-y-[2rem] xl:gap-y-0 justify-center px-[2rem] py-[2rem]">
          <div className="sm:w-full xl:w-[100rem]">
            <h1 className="sm:text-3xl md:text-4xl xl:text-5xl sm:text-center lg:text-start inter text-white">
              Firefighting <span className="title-color">Foam</span>
            </h1>

            <h3 className="mt-2 sm:text-2xl md:text-3xl xl:text-4xl sm:text-center lg:text-start inter text-white">
              Lifesaving or Lethal?
            </h3>

            <p className="mt-2 sm:text-sm md:text-base xl:text-xl sm:text-center lg:text-start roboto text-white">
              Just because civilians & service members use foam to save lives
              and property does not mean the substance itself is safe.
            </p>
            <p className="mt-5 sm:text-xs md:text-sm xl:text-lg sm:text-center lg:text-start roboto text-white">
              IF THAT ‘ACCEPTABLE RISK’ CAUSES YOU HARM, YOU MAY BE ABLE TO DO
              SOMETHING ABOUT IT.
            </p>
          </div>

          <div className="bg-white text-black w-full rounded-md py-[2rem] px-[1rem]">
            <p className="text-sm text-center roboto text-black">
              YOU MAY QUALIFY FOR SIGNIFICANT COMPENSATION
            </p>

            <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="1">
                How were you exposed to firefighting foam (AFFF)?
              </label>
              <select
                ref={afffRef}
                id="1"
                className="select bg-gray-100 w-full font-normal"
                defaultValue={"--Select--"}
              >
                <option value="--Select--" disabled>
                  --Select--
                </option>
                <option value="Civilian Firefighters">
                  Civilian Firefighters
                </option>
                <option value={"Military Firefighters"}>
                  Military Firefighters
                </option>
                <option value={"Other military servicemember"}>
                  Other military servicemember
                </option>
                <option value={"Airport personnel"}>Airport personnel</option>
                <option value={"No exposure"}>No exposure</option>
              </select>
              <p className="text-red-500">
                {afffState === true ? "Please select one" : ""}
              </p>

              <label htmlFor="2">
                Did you or a loved one develop any of the these cancers
                following the exposure?
              </label>
              <select
                id="2"
                className="select bg-gray-100 w-full font-normal"
                defaultValue="--Select--"
                ref={cancerRef}
              >
                <option disabled>--Select--</option>
                <option>Kidney cancer</option>
                <option>Pancreatic Cancer</option>
                <option>Testicular Cancer</option>
                <option>Prostate Cancer</option>
                <option>Bladder Cancer</option>
                <option>Thyroid Cancer</option>
                <option>Thyroid Disease</option>
                <option>Non-Hodgkin's Lymphoma</option>
                <option>Liver Cancer</option>
                <option>Ulcerative Colitis</option>
                <option>Other Cancer Diagnosis</option>
                <option>No Cancer</option>
              </select>
              <p className="text-red-500">
                {cancerState === true ? "Please select one" : ""}
              </p>

              <label htmlFor="1">
                Do you already have an attorney representing this case?
              </label>
              <select
                id="1"
                className="select bg-gray-100 w-full font-normal"
                defaultValue="--Select--"
                ref={_caseRef}
              >
                <option disabled>--Select--</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <p className="text-red-500">
                {caseState === true ? "Please select one" : ""}
              </p>

              <div className="flex justify-center items-center gap-x-5 w-full">
                <div className="w-1/2">
                  <label htmlFor="first">First name</label>
                  <input
                    type="text"
                    id="first"
                    placeholder="Jhon"
                    className="input w-full bg-gray-100 mt-4"
                    ref={firstNameRef}
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="secon">Last name</label>
                  <input
                    type="text"
                    id="secon"
                    placeholder="Hossan"
                    className="input w-full bg-gray-100 mt-4"
                    ref={lastNameRef}
                  />
                </div>
              </div>

              <label htmlFor="secon">Email</label>
              <input
                type="email"
                id="secon"
                placeholder="abc@gamil.com"
                className="input w-full bg-gray-100"
                ref={emailRef}
                required
              />

              <div className="flex justify-center items-center gap-x-5 w-full">
                <div className="w-1/2">
                  <label htmlFor="Phone">Phone</label>
                  <input
                    type="text"
                    id="Phone"
                    placeholder="01647..."
                    className="input w-full bg-gray-100 mt-4"
                    onInput={number}
                    ref={phoneRef}
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label htmlFor="zip">Zip code</label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="12345"
                    className="input w-full bg-gray-100 mt-4"
                    onInput={zip}
                    ref={zipCodeRef}
                    required
                  />
                </div>
              </div>

              <label htmlFor="text">
                Please describe where the exposure took place & any other
                details (Optional)
              </label>
              <textarea
                id="text"
                className="textarea textarea-bordered bg-gray-100"
                placeholder="write here"
                ref={textRef}
              ></textarea>

              <Button type="submit" disabled={spin === true ? true : false}>
                {spin === true ? (
                  <Spinner
                    color="purple"
                    aria-label="Purple spinner example"
                    size="sm"
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Form;
