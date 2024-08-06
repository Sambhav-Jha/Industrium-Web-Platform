import "../AboutUs/About.css";
import Card from "./Card";
import Shivam from "./Shivam.jpg";
import Sambhav from "./Sambhav.jpg";
import Goutham from "./Goutham.jpg";
import Rudra from "./Rudra.jpg";
export default function About() {
  return (
    <>
      <div className="card-collection">
        <a href="https://www.linkedin.com/in/shivam-goyal-85b63928a/" target="_blank"><Card
          image={Shivam}
          name="Shivam Goyal"
          branch="AI/DS"
          description="I like girls"
        ></Card></a>
        <a href="https://www.linkedin.com/in/sambhav-jha-61412528a/" target="_blank"><Card
          image={Sambhav}
          name="Sambhav Jha"
          branch="EE"
          description="I like Military P*rn"
        ></Card></a>
        <a href="https://www.linkedin.com/in/goutham-a-s-93b30b312/" target="_blank"><Card
          image={Goutham}
          name="Goutham A.S."
          branch="EE"
          description="I like Gujju people"
        ></Card></a>
        <a href="https://www.linkedin.com/in/rudra-shah-a804b528a/" target="_blank"><Card
          image={Rudra}
          name="Rudra Shah"
          branch="ME"
          description="I like boys"
        ></Card></a>
      </div>
    </>
  );
}
