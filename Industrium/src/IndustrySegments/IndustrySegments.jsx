import "../IndustrySegments/IndustrySegments.css";
import IndustryCard from "./IndustryCard";
import drone from "./drone.jpg";

export default function IndustrySegments(){
    return(
        <>
            <div className="indcards">
                <a href="" target="_blank"><IndustryCard
                    image = {drone}
                    name = "Drones"
                ></IndustryCard></a>
            </div>
        </>
    );
}