const Project = ({ title, desc, image_url }) => {
  return (
    <div className='card'>
      <img src={image_url} alt='Project' className='card-image' />
      <div className='title'>{title}</div>
      <div>{desc}</div>
    </div>
  );
};

export default Project;
