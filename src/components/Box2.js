import React from "react";
import "./Box2.css";

export const Backgrounds = () => {
  return (
    <div className="background2">
      <div className="overlap">
        <div className="div" />

        <div className="heading-custom">Custom Projects</div>

        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="element-wrapper">
              <div className="element">
                1<br />2<br />3<br />4<br />5<br />6<br />7
              </div>
            </div>

            <div className="paragraph-background">
              <div className="overlap-group-2">
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

                  <span className="text-wrapper-2">&nbsp;&nbsp;function </span>
                </p>

                <div className="text-wrapper-3">r</div>

                <div className="text-wrapper-4">|</div>
              </div>
            </div>

            <div className="border" />
          </div>
        </div>
      </div>

      <p className="we-created-a">
        We created a versatile chatbot that
        <br />
        understands diverse questions.
      </p>
    </div>
  );
};
