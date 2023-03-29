const TipsModal = ({ setOpenModal }) => {
  return (
    <>
      <div className="background" onClick={() => setOpenModal(false)}></div>
      <div className="modal">{/* <h2>tips</h2> */}</div>
    </>
  );
};
export default TipsModal;
