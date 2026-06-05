import './Card.css';

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export const Card = ({ title, description,image }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt="card" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};