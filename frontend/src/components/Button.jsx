function Button({ text, onClick }) {
    return (
    <div onClick={onClick} className="p-[3px] rounded-3xl bg-gradient-to-r from-rose-500 to-purple-500">
        <button className="px-8 py-2 bg-[#09121D] rounded-3xl text-white font-semibold hover:bg-gradient-to-r from-rose-500 to-purple-500">
            { text }
        </button>
    </div>
    );
}

export default Button;