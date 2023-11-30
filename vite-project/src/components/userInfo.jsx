/* eslint-disable react/prop-types */
const UserInfo = (props) => {
  return (
    <>
      <h2>
        I am {props.name} from {props.nationality}, {props.age} years of girl. I am currently studying at {props.university}
      </h2>
    </>
  );
};

export default UserInfo;
