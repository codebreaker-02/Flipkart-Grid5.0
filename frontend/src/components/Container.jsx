const Container = ({component}) => {
    return (
        <main className="MainContainer">
            <div className="BackgroundBlurObject1"></div>
            {/* <img className="BackgroundBlurObject2" src={ backgroundBlurObject2 }></img> */}
                {component}
            <div className="BackgroundBlurObject3"></div>
        </main>
    )
};

export default Container;