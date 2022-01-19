import React from "react";
import PropTypes from "prop-types";
import count from "../index.js";

const SecondCounter = (props) => {
	return (
		<div className="card" style={{ width: "18 rem" }}>
			<div className="card-body">
				<h5 className="card-title">Second Counter</h5>
				<p className="card-text">
					<i className="far fa-clock"></i>
					{props.count} Segundos
				</p>
			</div>
		</div>
	);
};

SecondCounter.propTypes = { count: PropTypes.number };

export default SecondCounter;
