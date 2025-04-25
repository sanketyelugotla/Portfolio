import React from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "../hoc";

function Github() {
    return (
        <div className="flex flex-col items-center pb-4 font-Montserrat">
            <h1 className="text-3xl font-semibold pb-5 text-center font-Volkhov mb-5">
                Days I <strong className="text-purple-500">Code</strong>
            </h1>
            <GitHubCalendar
                username="adfar-136"
                // username="sanketyelugotla"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
            />
        </div>
    );
}

export default SectionWrapper(Github, "");
