const Project = ({ title, desc }) => {
  return (
    <div className='card'>
      <div className='title'>{title}</div>
      <div>{desc}</div>
    </div>
  );
};

export default Project;
