import style from "./box.module.css"
const Box =(props) =>{
    return(
        

        <div className="md:w-2/4 sm:w-2/4 w-3/4 p-2 mx-auto">

        <div className={"w-full h-full  p-4 md:flex-col gap-4 lg:w-full text-white relative lg:flex lg:items-center lg:justify-center sm:item-center sm:justify-center  rounded-3xl     "  +style.item}  style={{ background: "linear-gradient(250.38deg," + props.startcolor + " 4.14%," + props.endcolor + " 97.36%)"  }}>
                <div className=" w-full flex items-center flex-col  gap-2  ">
                    <h3 className="py-4 2xl:text-3xl xl:text-xl sm:text-xl text-2xl">{props.title}</h3>
                    <p className="text-3xl">{props.topic}</p>
                    <img className={style.icon} alt=''  src={props.iconUrl}  />
                </div>
            </div>
        </div>
        
    )
}
export default Box