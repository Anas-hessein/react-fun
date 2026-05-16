import koImage from "../ko.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={koImage} alt="koshary" />
                <span>Koshary</span>
            </nav>
        </header>
    )
}