

export const Header = () => {



    const goToStart = () => {
        window.scrollTo({top: 0, behavior:"smooth"})
    }

    const goToAbout = () => {
        window.scrollTo({top: (window.innerHeight)*1.05, behavior:"smooth"})
    }

    const goToWork = () => {
        window.scrollTo({top: (window.innerHeight)*2.2, behavior:"smooth"})
    }
    const goToContact = () => {
        window.scrollTo({top: (window.innerHeight)*4, behavior:"smooth"})
    }
    return(
<header>
    <nav>
        <div className="logo-container" onClick={goToStart}>
            <span className="logo-container-el">&lt;</span>
            <span className="c_g logo-container-el">header</span>
            <span className="logo-container-el">&gt;</span>
        </div>
        <div className="main-navigation-container">
            <div className="main-navigation-container-hover" onClick={goToAbout}>
                <span >&lt;</span>
                <span className="c_g">about</span>
                <span>&gt;</span>
            </div>
            <div className="main-navigation-container-hover" onClick={goToWork}>
                <span >&lt;</span>
                <span className="c_g">work</span>
                <span>&gt;</span>
            </div>
            <div className="main-navigation-container-hover" onClick={goToContact}>
                <span >&lt;</span>
                <span className="c_g">contact</span>
                <span>&gt;</span>
            </div>
        </div>
    </nav>
</header>
    )
    }