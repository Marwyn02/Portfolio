import Card from "../UI/Card";

const SiteLayout = (props) => {
  const WebList = props.items.map((item) => {
    return item;
  });
  return (
    <div>
      <div className="text-center mb-2 mt-12">
        <h1 className="font-semibold text-gray-50/90 tracking-wide">
          welcome to my collections
        </h1>
      </div>
      <div>
        <Card data={WebList} />
      </div>
    </div>
  );
};

export default SiteLayout;
