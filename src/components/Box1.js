import React from "react";
import background2 from "../assets/bg.png";
import background3 from "../assets/bg.png";
import background from "../assets/bg.png";
import image1 from "../assets/bg.png";
import "./Box1.css";

export const Box1 = () => {
  return (
    <div className="container">
      <div className="group">
        <div className="background-shadow">
          <div className="background">
            <div className="overlap-group">
              <div className="div" />

              <div className="heading-plan">Plan &amp; Organize</div>

              <div className="div-2" />

              <div className="border" />

              <div className="overlap-wrapper">
                <div className="overlap">
                  <div className="overlap-group-2">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />

                    <div className="horizontal-divider-3" />

                    <div className="background-wrapper">
                      <div className="background-2" />
                    </div>

                    <div className="div-wrapper">
                      <div className="background-3">
                        <div className="div-3" />
                      </div>
                    </div>

                    <img className="img" alt="Background" src={background2} />
                  </div>

                  <img
                    className="background-4"
                    alt="Background"
                    src={background}
                  />

                  <div className="background-5">
                    <div className="background-6" />
                  </div>

                  <img className="background-7" alt="Background" src={image1} />

                  <img
                    className="background-8"
                    alt="Background"
                    src={background3}
                  />
                </div>
              </div>
            </div>

            <p className="we-enhance">
              We enhance efficiency by integrating
              <br />
              apps and reducing downtime.
            </p>
          </div>
        </div>

        <div className="background-shadow-2">
          <div className="background">
            <div className="overlap-group">
              <div className="div-4" />

              <div className="heading-custom">Custom Projects</div>

              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="element-wrapper">
                    <div className="element">
                      1<br />2<br />3<br />4<br />5<br />6<br />7
                    </div>
                  </div>

                  <div className="paragraph-background">
                    <div className="overlap-group-3">
                      <p className="class-chatbot">
                        <span className="text-wrapper">Class</span>

                        <span className="span">
                          {" "}
                          ChatBot{"{"} <br />
                          &nbsp;&nbsp;address public owner; <br />
                          &nbsp;&nbsp;int private response;
                          <br />
                          &nbsp;&nbsp;
                        </span>

                        <span className="text-wrapper">constructor</span>

                        <span className="span">
                          (){"{"}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;owner = msg.sender;
                          <br />
                          &nbsp;&nbsp;{"}"}
                          <br />
                        </span>

                        <span className="text-wrapper-2">
                          &nbsp;&nbsp;function{" "}
                        </span>
                      </p>

                      <div className="text-wrapper-3">r</div>

                      <div className="text-wrapper-4">|</div>
                    </div>
                  </div>

                  <div className="border-2" />
                </div>
              </div>
            </div>

            <p className="we-created-a">
              We created a versatile chatbot that
              <br />
              understands diverse questions.
            </p>
          </div>
        </div>

        <div className="background-shadow-3">
          <div className="background">
            <div className="overlap-group">
              <div className="div-5" />

              <div className="heading-smart">Smart Automation</div>

              <div className="div-6" />

              <div className="border" />

              <div className="vertical-divider" />

              <div className="background-9">
                <div className="background-10">
                  <div className="div-7" />

                  <div className="text-wrapper-5">Trigger</div>
                </div>
              </div>

              <div className="background-11">
                <div className="background-10">
                  <div className="div-8" />

                  <div className="text-wrapper-6">Prompts</div>
                </div>
              </div>

              <div className="background-12">
                <div className="background-10">
                  <div className="div-9" />

                  <div className="text-wrapper-7">Send Email</div>
                </div>
              </div>
            </div>

            <p className="we-analyze">
              We analyze operations and suggest
              <br />
              AI solutions to boost efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
