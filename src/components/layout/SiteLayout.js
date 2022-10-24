import Card from "../UI/Card";

const SiteLayout = (props) => {
    const WebList = props.items.map((item) => {
        return item;
    })
    return (
        <div>
            <div className="text-center mb-3 mt-10">
                <h1 
                    className="font-semibold text-slate-800 tracking-wide"
                >
                    welcome to my collections
                </h1>
            </div>
            <div>
                <Card 
                    data={ WebList }
                />
            </div>
        </div>
    )
}

export default SiteLayout;