import React from "react";
import Cv from "../components/Cv";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import IntroSec from "../components/IntroSec";
import Projects from "../components/Projects";

export default function Homepage(){
    return(
        <>
        <IntroSec />
<Experience />
<Projects />
<Cv />
<Footer />
        </>
    );
}