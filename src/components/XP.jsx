import React, { useEffect, useRef, useState } from "react";

import asml_logo from "/Logos/ASML_logo.png"
import shu from "/Logos/Sacred_Heart_University.png"
import sikorsky from "/Logos/Sikorsky_Aircraft_Logo.png"

import { Spotlight } from "./Spotlight";

function XP() {
  const ulRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ulRef.current) {
      observer.observe(ulRef.current);
    }

    return () => {
      if (ulRef.current) {
        observer.unobserve(ulRef.current);
      }
    };
  }, []);

  return (
    <div
  id="XP"
  className="w-full flex flex-col overflow-x-hidden min-h-screen bg-slate-200 border-none relative items-center justify-center "
>
  {/* Background Layer */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-fuchsia-600 bg-[size:20px_20px] opacity-20 blur-[120px] border-10 " />
  </div>

  

      
     
      {/* <div className="relative  inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div> */}
      <h2 className="flex w-full  sm:mt-10 mt-5 mb-0 justify-center text-[40px]  relative top-0  h-auto py-3   bg-gradient-to-r items-center from-sky-600 to-violet-600 bg-clip-text text-[24px]  sm:text-4xl md-text-3xl lg-text-4xl font-extrabold text-transparent text-center select-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] z-20 ">
        Professional Experience
      </h2>

      <section
        id="main_content"
        className="w-full flex flex-col md:flex-row items-center  justify-center md:space-x-12 px-4">



        <div
          id=""
          className="lg:w-3/6 md:w-5/6 sm:w-5/6 h-5/6 w-5/6 flex  justify-center items-center  translate-x-5 gap-0 z-20"

        >          
          <div  ref={ulRef}className ="-my-">

            <div className ={`relative p-9 pb-2 sm:pl-32 pl-6 pr-10  group  ${inView ? "animate-slidein1" : "opacity-0"}`}>
              {/* This areat has the pruple label */}
              <img src={asml_logo} alt="ASML_logo" className=" w-20 border-10 border-white "/>
              {/* <div className="font-caveat font-medium text-lg sm:text-2xl text-blue-400 indigo-300 mb-1 sm:mh-0 whitespace-nowrap">ASML</div> */}
              {/* This is the vertriclke connecting line  */}
              <div className="flex flex-col sm:flex-row items-start mb- group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-900 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-100 bg-indigo-700 rounded-full">May, 2025</time>
                <div className="text-md sm:text-xl  md:text-2xl  lg:text-2xl font-bold text-blue-800 ">Data Visualization & Analytics Engineer Intern </div>
              </div>
               {/* Mobile view: short version */}
              <div className="text-black text-sm sm:hidden">
                Built an NLP app with Python, Streamlit, and Databricks to predict root cause codes and speed up anomaly resolution, and delivered real-time BI tools for workflow insights...
              </div>
          
              <div className=" text-black  text-sm md:text-sm lg:text-[16px] hidden sm:block">Developed an NLP application with Python, Streamlit, and Databricks to predict root cause codes from operator text entries, reducing anomaly resolution time. Trained and fine-tuned five ML models (SVC, Logistic Regression, XGBoost, Random Forest, Naive Bayes) to optimize performance, and delivered real-time BI tools for workflow insights while collaborating in an Agile/Scrum environment with GitLab version control.</div>
            </div>

            <div className ={`relative p-9 sm:pl-32 py-4 pl-6 pr-10 group  ${inView ? "animate-slidein2" : "opacity-0"}`}>
              {/* This areat has the pruple label */}
              {/* <div className="font-caveat font-medium text-lg sm:text-2xl text-blue-400 indigo-300 mb-1 sm:mh-0 whitespace-nowrap ">Sacred Heart University</div> */}
              <img src={shu}alt="ASML_logo" className=" w-32 border-10 border-white bg-transparent "/>

              {/* This is the vertriclke connecting line  */}
              <div className={` flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-900 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5`}>
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase sm: w-20 w-15  h-6 mb-3 sm:mb-0 text-emerald-100 bg-indigo-700 rounded-full">Nov, 2024</time>
                <div className="text-md sm:text-xl  md:text-2xl  lg:text-2xl font-bold text-blue-800 ">Data Analyst Intern</div>
              </div>
          
              {/* Mobile view: short version */}
            <div className="text-black text-sm sm:hidden">
              Built data pipelines with Python and R to analyze sports data, applied ML to predict weightlifting progress, identified key performance metrics, and co-authored a research paper on weightlifting analysis.
            </div>

            {/* Desktop view: full version */}
            <div className="text-black  text-sm md:text-sm lg:text-[16px]  hidden sm:block ">
              Built data pipelines using BeautifulSoup, NumPy, and Matplotlib to extract and analyze sports data, and used R for statistical analysis and visualization. Applied machine learning to predict weightlifting progression and identify key performance indicators. Contributed to the release of a research paper on weightlifting analysis using ML and conducted predictive feature importance studies on basketball datasets to uncover impactful training metrics.
            </div>

            </div>
            <div className ={`relative  p-9 sm:pl-32 pt-1  pl-6 pr-10 group  ${inView ? "animate-slidein3" : "opacity-0"}`}>
              {/* This areat has the pruple label */}
              {/* <div className="font-caveat font-medium text-lg sm:text-2xl text-blue-400 indigo-300 mb-1 sm:mh-0 whitespace-nowrap">Sikorky Historical Archives</div> */}
              <img src={sikorsky} alt="ASML_logo" className=" w-32 border-10 border-white bg-transparent "/>

              {/* This is the vertriclke connecting line  */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-900 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-100 bg-indigo-700 rounded-full">May, 2023</time>
                <div className="text-md sm:text-xl md:text-2xl  lg:text-2xl font-bold text-blue-800 ">Database Developer Intern</div>
              </div>
          
                          {/* Mobile view: short version */}
            <div className="text-black text-sm sm:hidden">
              Analyzed archival database systems, built Python data integration scripts (SQL/MySQL/MongoDB), aligned solutions with organizational needs, and delivered clear presentations and vendor demos to guide system selection.
            </div>

            {/* Desktop view: full version */}
            <div className="text-black text-sm md:text-sm lg:text-[16px] hidden sm:block">
              Led a comprehensive analysis of archival database systems, identifying key areas for improvement in workflows and data management. Developed custom data integration scripts in Python for SQL, MySQL, and MongoDB. Collaborated closely with the archives team to align technical initiatives with organizational needs. Presented complex technical findings in clear, actionable terms and facilitated product demos with vendors to support informed system selection.
            </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default XP;
