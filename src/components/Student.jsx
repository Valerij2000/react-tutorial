import PropTypes from "prop-types";
import "../styles/student.scss";
import defaultAvatar from "/ava1.avif";

function Student(props) {
  console.log(props);
  return (
    <div className="student">
      <img
        src={props.image || defaultAvatar}
        alt="Image"
        className="student__image"
      />
      <div className="student__content">
        <h3 className="student__name">Name: {props.name || "Guest"}</h3>
        <p className="student__text">Login: {props.login || "guest2000"}</p>
        <p className="student__text">Age: {props.age ?? 0}</p>
        <p className="student__text">
          Student: {props.isStudent ? "Yes" : "Not"}
        </p>
        <div className="student__buttons">
          <button className="student__btn--primary">Подробнее</button>
          <button className="student__btn--secondary">Удалить</button>
        </div>
      </div>
    </div>
  );
}

Student.defaultProps = {
  image: "./ava1.avif",
  name: "Guest",
  login: "guest2000",
  age: 0,
  isStudent: false,
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
  image: PropTypes.string,
};

export default Student;
