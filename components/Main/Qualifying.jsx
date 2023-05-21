import { Accordion } from "flowbite-react";
import React from "react";
import { Element } from "react-scroll";

function Qualifying() {
  return (
    <>
      <Element name="Qualifying">
        <div className="mt-64 w-full">
          <h1 className="mt-64 sm:text-2xl md:text-3xl xl:text-4xl text-center inter text-black">
            Qualifying for Compensation
          </h1>

          <div className="w-full flex justify-center items-center">
            <div className="w-full sm:px-0 md:px-16 lg:px-24 sm:mt-[5rem] lg:mt-36">
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>
                    <p className="text-black">
                      There are many people beyond firefighters...
                    </p>
                  </Accordion.Title>

                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      There are many people beyond firefighters who come into
                      daily contact with firefighting foam and similar
                      fire-retardant chemicals. Persons under significant threat
                      of fire may work in an environment laced with carcinogenic
                      preventative measures. This is especially prevalent in the
                      military, aeronautic, or construction industries.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    <p className="text-black">
                      Exposure does not have to be job-related...
                    </p>
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Exposure does not have to be job-related. Firefighting
                      foam can affect entire communities through drinking water
                      contaminated by chemical runoff. However, most people with
                      a clear link between the contaminant and their condition
                      experienced prolonged exposure.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    <p className="text-black">
                      To qualify, you need to prove that dangerous...
                    </p>
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      To qualify, you need to prove that dangerous chemicals
                      from firefighting foam were in your surroundings at high
                      levels—and that you have a directly related injury.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Qualifying;
