type Props = {
  text: string,
  className?: string
}

const TitleText: React.FC<Props> = ({ text, className }) => {
  return (
    <h3 className={`title-text text-primary font-semibold ${className}`}>{text}</h3>
  );
};

TitleText.defaultProps = {
  className: ''
}

export default TitleText;