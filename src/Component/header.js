
export const Header = () => {

    return(
<header>
    <nav>
        <div className="logo-container">
            <span className="logo-container-el">&lt;</span>
            <span className="c_g logo-container-el">header</span>
            <span className="logo-container-el">&gt;</span>
        </div>
        <div className="main-navigation-container">
            <div className="main-navigation-container-hover">
                <span >&lt;</span>
                <span className="c_g">about</span>
                <span>&gt;</span>
            </div>
            <div className="main-navigation-container-hover">
                <span >&lt;</span>
                <span className="c_g">work</span>
                <span>&gt;</span>
            </div>
            <div className="main-navigation-container-hover">
                <span >&lt;</span>
                <span className="c_g">contact</span>
                <span>&gt;</span>
            </div>
        </div>
    </nav>
</header>
    )
    }