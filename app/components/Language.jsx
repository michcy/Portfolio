export default function Language(props) {
    return (
        <div id={`language${props.language.id}`}
             className="language-card flex bg-white justify-between font-josefin items-center rounded-2xl border-black border-2 text-black gap-4 p-4">
            <div className="flex items-center gap-5">
                <img src={props.language.icon} alt=""
                     className="w-20 aspect-square object-cover border-primary border-2 bg-white rounded-xl h-20"/>
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="sm:text-2xl flex-1 text-xl">{props.language.name}</h3>
                    <p className="bg-primary flex-none grow justify-center sm:text-base text-xs flex text-secondary py-2 px-4 rounded-4xl">{props.language.proficiency}</p>
                </div>
            </div>
        </div>
    );
}