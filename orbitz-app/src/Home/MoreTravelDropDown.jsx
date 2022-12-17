import "./MoreTravelDropDown.css";
import { useState } from "react";
import { FaHotel, FaSuitcase } from "react-icons/fa";
import {
  RiShipFill,
  RiPlaneLine,
  RiCarFill,
  RiCouponFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={dropdown ? "dropdown_clicked" : "dropdown"}
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      <div
        className="blue"
        onClick={() => {
          setDropdown(false);
        }}
      >
        <div>
          <FaHotel />
        </div>
        <div>
          <Link
            to="/stays"
            style={{ textDecoration: "none", color: "#007e8f" }}
          >
            Stays
          </Link>
        </div>
      </div>
      <div
        className="blue"
        onClick={() => {
          setDropdown(false);
        }}
      >
        <div>
          <RiPlaneLine />
        </div>
        <div>
          <Link
            to="/flights"
            style={{ textDecoration: "none", color: "#007e8f" }}
          >
            {" "}
            Flights
          </Link>
        </div>
      </div>
      <div
        className="blue"
        onClick={() => {
          setDropdown(false);
        }}
      >
        <div>
          <FaSuitcase />
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "#007e8f" }}
            to="/packages"
          >
            Packages
          </Link>{" "}
        </div>
      </div>
      <div
        className="blue"
        onClick={() => {
          setDropdown(false);
        }}
      >
        <div>
          <RiCarFill />
        </div>
        <div>
          <Link to="/cars" style={{ textDecoration: "none", color: "#007e8f" }}>
            Cars
          </Link>
        </div>
      </div>
      <div
        className="blue"
        onClick={() => {
          setDropdown(false);
        }}
      >
        <div>
          <RiShipFill />
        </div>
        <div>
          <Link
            to="/cruises"
            style={{ textDecoration: "none", color: "#007e8f" }}
          >
            Cruises
          </Link>
        </div>
      </div>
      <div
        className="blue"
        onClick={() => {
          setDropdown(false);
        }}
      >
        <div>
          <RiCouponFill />
        </div>
        <div>
          <Link
            to="/things"
            style={{ textDecoration: "none", color: "#007e8f" }}
          >
            Things to do
          </Link>
        </div>
      </div>
      <div
        className="black"
        onClick={() => {
          setDropdown(false);
        }}
      >
        Deals
      </div>
      <div
        className="black"
        onClick={() => {
          setDropdown(false);
        }}
      >
        Groups & meetings
      </div>
      <div
        className="black"
        onClick={() => {
          setDropdown(false);
        }}
      >
        Travel Blog
      </div>
    </div>
  );
};
