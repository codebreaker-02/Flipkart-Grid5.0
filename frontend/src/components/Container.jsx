const Container = ({component}) => {
    return (
        <main className="MainContainer">
            <div className="BackgroundBlurObject1"></div>
                {component}
            <div className="BackgroundBlurObject3"></div>
        </main>
    )
};

export default Container;