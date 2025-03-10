export default function SectionHeader({ title, button, className }){
    return(
        <>
        {
            button 
            ?   <div className={ className } style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 className="title bolder">{ title }</h1>
                    { button }
                </div> 
            :   <h1 className="r-bolder">{ title }</h1>
        }
        </>
    )
}