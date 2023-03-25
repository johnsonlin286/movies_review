type Props = {
  backgroundImg: string,
}

const ViewBanner: React.FC<Props> = ({ backgroundImg }) => {
  return (
    <div className="view-banner" style={{backgroundImage: `url('${backgroundImg}')` }}/>
  );
};

export default ViewBanner;