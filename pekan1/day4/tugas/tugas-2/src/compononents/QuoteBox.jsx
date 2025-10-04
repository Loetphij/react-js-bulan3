import "./QuoteBox.css"

function QuoteBox() {
    const quote = "Hidup-hidupilah Muhammadiyah, jangan cari penghidupan di Muhammadiyah"
    const author = "KH Ahmad Dahlan"
    
    return (
        <div className="quote-box">
            <p className="quote-text">"{quote}"</p> <br />
            <p className="quote-author">- {author}</p>
        </div>
    )
}

export default QuoteBox