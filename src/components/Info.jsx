
export default function Info(){
    return (
        <div className="info">
            <div className="info-title-div">
                <h2 className="info-title">Advanced Statistics</h2>
                <p className="info-p">Treck how your links are performing accross the web with <br />our advanced statistics dashboard.</p>
            </div>
            <hr className="seperating-line"></hr>
            <div className="info-blocks">
                <div className="block-one">
                    <div className="icon-circle">
                        <img src="./images/icon-brand-recognition.svg" alt="graph icon" />
                    </div>
                        <h3 className="block-one-title">Brand Recognition</h3>
                        <p className="block-one-p">Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content. </p>
                </div>
                <div className="block-two">
                    <div className="icon-circle">
                        <img src="./images/icon-detailed-records.svg" alt="clock"/>
                    </div>
                        <h3 className="block-two-title">Detailed Records</h3>
                        <p className="block-two-p">Gain insights into who is clicking your links. Knowing when and where people engage with your content help inform better decisions.</p>
                </div>
                <div className="block-three">
                    <div className="icon-circle">
                        <img src="./images/icon-fully-customizable.svg" alt="painbrush icon" />
                    </div>
                        <h3 className="block-three-title">Fully Customizable</h3>
                        <p className="block-one-p">Improve brand awareness and content discoverability through customizable links, supercharging <br/> audience engagement.</p>
                </div>
            </div>
        </div>
    )
}