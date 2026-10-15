// import { useLocation } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import "./Cards.css";

export const StudentCard = ({name, age, marks}) => {
   //  const {state} = useLocation ();
   //  const {Name, age, Marks} = state || {};
    
 return (
      <main className="demo-page student-page">
         <article className="demo-card student-card">
            <div className="student-heading">
               <span className="student-avatar" aria-hidden="true">
                  <PiStudentFill />
               </span>
               <div>
                  <p className="demo-eyebrow">Student profile</p>
                  <h1>{name}</h1>
               </div>
            </div>
            <dl className="student-details">
               <div>
                  <dt>Age</dt>
                  <dd>{age}</dd>
               </div>
               <div>
                  <dt>Marks</dt>
                  <dd>{marks}</dd>
               </div>
            </dl>
         </article>
      </main>
 );

};