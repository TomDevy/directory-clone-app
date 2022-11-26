import React from "react";
import "./middleSection.css";
import MiddleSectionAtom from "../../Atoms/middleSectionAtom/middleSectionAtom";
import { GiCardPlay } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const MiddleSection = () => {
  return (
    <div className="middle">
      <h4 className="middle-text">ONE-OF-A-KIND VACATION RENTALS</h4>
      <h1 className="">Booking with us is easy</h1>
      <div className="middle-flex">
        <MiddleSectionAtom
          icon={<TbMapSearch />}
          head="Find the perfect rental"
          details="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in"
        />
        <MiddleSectionAtom
          icon={<GiCardPlay />}
          head="Book with confidence"
          details="The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit"
        />
        <MiddleSectionAtom
          icon={<AiOutlineHeart />}
          head="Enjoy your vacation"
          details="His room, a proper human room although a little too small, lay peacefully between its four familiar"
        />
      </div>
    </div>
  );
};

export default MiddleSection;
