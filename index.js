const Box = (props) => {
  const { className, boxText } = props;
  return <div className={`div ${className}`}>{boxText}</div>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <div className="content-container">
      <h1 className="heading">Boxes</h1>
      <div className="box-container">
        <Box className="box1" boxText="Small" />
        <Box className="box2" boxText="Medium" />
        <Box className="box3" boxText="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
